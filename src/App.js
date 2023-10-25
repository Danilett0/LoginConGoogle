import "./App.css";
import React, { useState } from "react";
import Login from "./Components/Login";

import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const [userLog, setUserLog] = useState(false);

  let imgAvatar = localStorage.getItem("Avatar-User") || "";
  const nameUser = localStorage.getItem("Name-User") || "";
  const emailUser = localStorage.getItem("Email-User") || "";

  let headerContent;

  if (!userLog) {
    if (imgAvatar) {
      headerContent = (
        <>
          <img className="AvatarUser" src={imgAvatar} alt="img avatar user" />{" "}
          <h5>
            {nameUser} <br /> {emailUser}
          </h5>
        </>
      );
    } else {
      headerContent = <Login setUserLog={setUserLog} />;
    }
  } else {
    headerContent = (
      <>
        <img className="AvatarUser" src={imgAvatar} alt="img avatar user" />{" "}
        <h5>
          {nameUser} <br /> {emailUser}
        </h5>
      </>
    );
  }

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
      <div className="App">
        <header className="App-header">{headerContent}</header>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;

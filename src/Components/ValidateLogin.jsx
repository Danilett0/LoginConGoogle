import React, { useState } from "react";
import Login from "./Login";
import { GoogleOAuthProvider } from "@react-oauth/google";

function ValidateLogin(props) {
  const [userLog, setUserLog] = useState(false);

  let imgAvatar = localStorage.getItem("Avatar-User") || "";

  let headerContent;

  if (!userLog) {
    if (!imgAvatar) {
      headerContent = <Login setUserLog={setUserLog} />;
    }
  }

  return (
    <GoogleOAuthProvider  clientId={process.env.REACT_APP_CLIENT_ID}>
      {headerContent}
    </GoogleOAuthProvider>
  );
}

export default ValidateLogin;

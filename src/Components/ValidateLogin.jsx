import React, { useState } from "react";
import Login from "./Login";
import { GoogleOAuthProvider } from "@react-oauth/google";

function ValidateLogin() {
  const [userLog, setUserLog] = useState(false);
  let DataUser = localStorage.getItem("DataUser") || "";
  let headerContent;

  if (!userLog) {
    if (!DataUser) {
      headerContent = <Login setUserLog={setUserLog} />;
    }
  }

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
      <div className="BtnGoogle">{headerContent}</div>
    </GoogleOAuthProvider>
  );
}

export default ValidateLogin;

import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

function Login({ setUserLog }) {
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        const decodedToken = jwt_decode(credentialResponse.credential);
        setUserLog(true);

        localStorage.setItem("Name-User", decodedToken.name);
        localStorage.setItem("Email-User", decodedToken.email);
        localStorage.setItem("Avatar-User", decodedToken.picture);
      }}
      onError={() => {
        console.log("Ops! errror al iniciar secion");
      }}
    />
  );
}

export default Login;

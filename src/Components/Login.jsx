import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import PropTypes from "prop-types";

function Login({ setUserLog }) {
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        const decodedToken = jwt_decode(credentialResponse.credential);
        setUserLog(true);

        let DataUser = {
          name: decodedToken.name,
          email: decodedToken.email,
          picture: decodedToken.picture,
        };

        localStorage.setItem("DataUser", JSON.stringify(DataUser));
      }}
      onError={() => {
        console.log("Ops! errror al iniciar secion");
      }}
    />
  );
}

Login.propTypes = {
  setUserLog: PropTypes.func,
};

export default Login;

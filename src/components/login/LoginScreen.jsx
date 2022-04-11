import React from "react";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {

  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("handleLogin");
    navigate('/marvel', {
      replace: true
    });
  };

  return (
    <div className="container mt-5">
      <h1>LoginScreen</h1>
      <hr />

      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginScreen;

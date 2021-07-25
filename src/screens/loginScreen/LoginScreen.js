import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./_loginScreen.scss";
import { login } from "../../redux/actions/auth.action"


const LoginScreen = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.auth.accessToken);
  
  const history = useHistory();
  const handleLogin = () => {
    dispatch(login());
  };
  useEffect(() => {
    if (accessToken) {
      history.push("/");
    }
  }, [accessToken, history]);


  const accessTokenError = useSelector((state) => state.auth.error);
  const [authError,setAuthError]=useState(false);

  useEffect(() => {
    if (accessTokenError) {
      setAuthError(true);
    }
  }, [accessTokenError, setAuthError]);
  

  return (
    <div className={`login`}>
      <div className={`login__btn  `}>
        <div className="yt">
          <div className={`play ${authError && "playErr"} `}></div>
        </div>
        <div className="content">
          <div className="logo">
            <i className="fab fa-youtube"></i>
            <span>YouTube</span>
            <p>© 2021 Google LLC</p>
          </div>
          <button onClick={handleLogin} className="login__btnButton">
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;

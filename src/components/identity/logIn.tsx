import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../home";
import { IdentityService } from "../../services/IdentityService";
import { AppContext } from "../../state/AppContext";
import { useNavigate } from "react-router-dom";
import httpClient from "../../services/HttpClient";
import { IAppState } from "../../state/IAppState";
import { stat } from "fs";

function LogIn() {
  let appState = useContext(AppContext);
  const identityService = new IdentityService();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [emailError, setemailError] = useState("");
  const navigate = useNavigate();
  const [errors, seterrors] = useState("");

  const loginSubmit = () => {
 
    let postResult = identityService.login(email, password).then((result) => {
      if (result.status == 200) {
        let state = result.data as IAppState;
        appState.setValues(state.firstName, state.lastName, state.token, state.refreshToken)
        let path = `/`;
        navigate(path);
      } else {
        console.log(result.errorMsg)
        seterrors(result.errorMsg)
      }
    })

  };

  return (
    <div className="Login">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
            <h1>Log In</h1>
            <h2>Use a local account to log in.</h2>
            <div className="form-group">
              <div>
                {errors}
              </div>
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                id="EmailInput"
                name="EmailInput"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={(event) => setEmail(event.target.value)}
              />
              <small id="emailHelp" className="text-danger form-text">
                {emailError}
              </small>
            </div>
            <div className="form-group pt-2">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
              />
              <small id="passworderror" className="text-danger form-text">
                {passwordError}
              </small>
            </div>
            <div className="pt-2">
              <button onClick={loginSubmit} type="submit" className="btn btn-outline-dark">
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LogIn;

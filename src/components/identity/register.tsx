import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IdentityService } from '../../services/IdentityService';
import { AppContext } from '../../state/AppContext';
import { IAppState } from '../../state/IAppState';

function Register() {

  let appState = useContext(AppContext);
  const identityService = new IdentityService();


  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordConfirmation, setpasswordConfirmation] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const navigate = useNavigate();

  const registerSubmit = () => {

    let postResult = identityService.Register(firstName, lastName, email, password).then((result) => {
      if (result.status == 200) {
        let state = result.data as IAppState;
        appState.setValues(state.firstName, state.lastName, state.token, state.refreshToken)
        let path = `/`;
        navigate(path);
      } else {
        console.log(result.errorMsg)
      }
    })


  }

  return (
    <>
      <div className="Login">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-4">
              <h1>Register</h1>
              <h2>Create a new account.</h2>
              <div className="form-group pt-2">
                <label>First Name</label>
                <input
                  className="form-control"
                  placeholder="First Name"
                  onChange={(event) => setfirstName(event.target.value)}
                />
              </div>
              <div className="form-group pt-2">
                <label>Last Name</label>
                <input
                  className="form-control"
                  placeholder="Last Name"
                  onChange={(event) => setlastName(event.target.value)}
                />
              </div>
              <div className="form-group pt-2">
                <label>Email address</label>
                <input
                  className="form-control"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="form-group pt-2">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <div className="form-group pt-2">
                <label>Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Confirm Password"
                  onChange={(event) => setpasswordConfirmation(event.target.value)}
                />
              </div>
              <div className="pt-2">
                <button onClick={registerSubmit} type="submit" className="btn btn-outline-dark">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Register;
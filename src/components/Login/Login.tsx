import React, { useContext } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import firebaseConfig from "./firebase.config";
import "./Login.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { UserContext } from "../../App";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const navigate = useNavigate();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn = () => {
    if (firebase.app.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        setLoggedInUser(result.user);
        // storeAuthToken();ss
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // const storeAuthToken = () => {
  //   firebase
  //     ?.auth()
  //     ?.currentUser.getIdToken(/* forceRefresh */ true)
  //     .then(function (idToken) {
  //       sessionStorage.setItem("token", idToken);
  //       navigate(from);
  //     })
  //     .catch(function (error) {
  //       // Handle error
  //     });
  // };

  return (
    <div className="loginSection row">
      <div className="login text-center col-md-12">
        <Link to="/">{/* <img src={logo} alt="" /> */}</Link>
        <div className="loginForm">
          <div className="google">
            <h5>Login With</h5>
            <button onClick={googleSignIn}>
              {/* <img src={google} alt="" /> */}
              Continue with Google
            </button>
            <p>
              Dont't have an account? <Link to="">Create an account</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

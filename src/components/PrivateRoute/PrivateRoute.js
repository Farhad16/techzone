import { useContext } from "react";
import { UserContext } from "../../App";
import jwt_decode from "jwt-decode";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const isLoggedIn = () => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      return false;
    }
    const decodedToken = jwt_decode(token);

    loggedInUser.displayName = decodedToken.name;
    loggedInUser.email = decodedToken.email;
    loggedInUser.photoURL = decodedToken.picture;

    const currentTime = new Date().getTime() / 1000;

    return decodedToken.exp > currentTime;
  };

  if (loggedInUser.email || isLoggedIn()) {
    return children;
  }
  return <Navigate to="/login" replace />;
};

export default PrivateRoute;

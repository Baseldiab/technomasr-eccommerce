/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./Auth";

const RequireAuth = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();
  // console.log(auth.user);
  if (auth.user.length === 0) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }
  return children;
};
export default RequireAuth;

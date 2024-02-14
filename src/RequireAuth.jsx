/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./Auth";

const RequireAuth = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();
  if (!auth.user.length) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }
  return children;
};
export default RequireAuth;

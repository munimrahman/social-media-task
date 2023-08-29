/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function PrivateRoute({ children }) {
  const location = useLocation();
  const isLoggedIn = useAuth();

  if (isLoggedIn) return children;
  return <Navigate to="/log-in" state={{ from: location }} replace />;
}

export default PrivateRoute;

import { Navigate } from "react-router-dom";

const ProtecTedRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtecTedRoute;

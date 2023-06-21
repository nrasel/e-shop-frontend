import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const SellerProtectedRoute = ({ children }) => {
  const { isSellerAuthenticated, isLoading } = useSelector(
    (state) => state.seller
  );
  if (isLoading === false) {
    if (!isSellerAuthenticated) {
      return <Navigate to={`/shop-login`} replace />;
    }
  }
  return children;
};

export default SellerProtectedRoute;

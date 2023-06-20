import { useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import ProtecTedRoute from "./ProtectedRoute";
import {
  ActivationPage,
  BestSellingPage,
  EventPage,
  FaqPage,
  HomePage,
  LoginPage,
  ProductDeatailsPage,
  ProductsPage,
  ProfilePage,
  SellerActivationPage,
  ShopCreatePage,
  ShopLoginPage,
  SignupPage,
} from "./Routes.js";
import SellerProtectedRoute from "./SellerProtectedRoute";
import { ShopHomePage } from "./ShopRoutes.js";
import CheckoutPage from "./pages/CheckoutPage";
import { loadSeller, loadUser } from "./redux/actions/user";
import Store from "./redux/store";

function App() {
  // const navigate = useNavigate();
  const { loading, isAuthenticated } = useSelector((state) => state.user);
  const { isSellerAuthenticated, isLoading } = useSelector(
    (state) => state.seller
  );

  useEffect(() => {
    Store.dispatch(loadUser());
    Store.dispatch(loadSeller());
  }, []);
  return (
    <div>
      {loading || isLoading ? null : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignupPage />} />
            <Route
              path="/activation/:activation_token"
              element={<ActivationPage />}
            />
            <Route
              path="/seller/activation/:activation_token"
              element={<SellerActivationPage />}
            />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:name" element={<ProductDeatailsPage />} />

            <Route path="/best-selling" element={<BestSellingPage />} />
            <Route path="/events" element={<EventPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route
              path="/checkout"
              element={
                <ProtecTedRoute isAuthenticated={isAuthenticated}>
                  <CheckoutPage />
                </ProtecTedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtecTedRoute isAuthenticated={isAuthenticated}>
                  <ProfilePage />
                </ProtecTedRoute>
              }
            />

            {/* shop route */}
            <Route path="/shop-create" element={<ShopCreatePage />} />
            <Route path="/shop-login" element={<ShopLoginPage />} />
            <Route
              path="/shop/:id"
              element={
                <SellerProtectedRoute
                  isSellerAuthenticated={isSellerAuthenticated}
                >
                  <ShopHomePage />
                </SellerProtectedRoute>
              }
            />
          </Routes>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;

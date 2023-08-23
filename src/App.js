import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { ShopHomePage } from "./ShopRoutes.js";
import CheckoutPage from "./pages/CheckoutPage";
import OrderSuccessPage from "./pages/OrderSuccessPage";
import PaymentPage from "./pages/PaymentPage";
import { getAllEvents } from "./redux/actions/event";
import { getAllProducts } from "./redux/actions/product";
import { loadSeller, loadUser } from "./redux/actions/user";
import Store from "./redux/store";
import ProtecTedRoute from "./routes/ProtectedRoute";
import {
  ActivationPage,
  BestSellingPage,
  EventPage,
  FaqPage,
  HomePage,
  LoginPage,
  OrderDetailsPage,
  ProductDeatailsPage,
  ProductsPage,
  ProfilePage,
  SellerActivationPage,
  ShopCreatePage,
  ShopLoginPage,
  SignupPage,
  TrackOrderPage,
} from "./routes/Routes.js";
import SellerProtectedRoute from "./routes/SellerProtectedRoute";
import {
  ShopAllCoupouns,
  ShopAllEvents,
  ShopAllOrders,
  ShopAllProducts,
  ShopAllRefunds,
  ShopCreateEvents,
  ShopCreateProduct,
  ShopDashboardPage,
  ShopOrderDetails,
  ShopPreviewPage,
  ShopSettingsPage,
} from "./routes/ShopRoutes";
import { server } from "./server";

function App() {
  // const navigate = useNavigate();
  const [stripeApikey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get(`${server}/payment/stripeapikey`);

    setStripeApiKey(data.stripeApikey);
  }

  useEffect(() => {
    Store.dispatch(loadUser());
    Store.dispatch(loadSeller());
    Store.dispatch(getAllProducts());
    Store.dispatch(getAllEvents());
    getStripeApiKey();
  }, []);
  // console.log(stripeApikey);
  return (
    <div>
      <BrowserRouter>
        {stripeApikey && (
          <Elements stripe={loadStripe(stripeApikey)}>
            <Routes>
              <Route
                path="/payment"
                element={
                  <ProtecTedRoute>
                    <PaymentPage />
                  </ProtecTedRoute>
                }
              />
            </Routes>
          </Elements>
        )}
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
          <Route path="/product/:id" element={<ProductDeatailsPage />} />
          {/* <Route path="/event/:id" element={<EventDetailsPage />} /> */}

          <Route path="/best-selling" element={<BestSellingPage />} />
          <Route path="/events" element={<EventPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route
            path="/checkout"
            element={
              <ProtecTedRoute>
                <CheckoutPage />
              </ProtecTedRoute>
            }
          />
          <Route path="/order/success" element={<OrderSuccessPage />} />
          <Route
            path="/profile"
            element={
              <ProtecTedRoute>
                <ProfilePage />
              </ProtecTedRoute>
            }
          />
          <Route
            path="/user/order/:id"
            element={
              <ProtecTedRoute>
                <OrderDetailsPage />
              </ProtecTedRoute>
            }
          />
          <Route
            path="/user/order/:id"
            element={
              <ProtecTedRoute>
                <OrderDetailsPage />
              </ProtecTedRoute>
            }
          />
          <Route
            path="/user/track/order/:id"
            element={
              <ProtecTedRoute>
                <TrackOrderPage />
              </ProtecTedRoute>
            }
          />
          <Route path="/shop/preview/:id" element={<ShopPreviewPage />} />

          {/* shop route */}
          <Route path="/shop-create" element={<ShopCreatePage />} />
          <Route path="/shop-login" element={<ShopLoginPage />} />
          <Route
            path="/shop/:id"
            element={
              <SellerProtectedRoute>
                <ShopHomePage />
              </SellerProtectedRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <SellerProtectedRoute>
                <ShopSettingsPage />
              </SellerProtectedRoute>
            }
          />

          {/* dashboard route */}
          <Route
            path="/dashboard"
            element={
              <SellerProtectedRoute>
                <ShopDashboardPage />
              </SellerProtectedRoute>
            }
          />
          <Route
            path="/dashboard-create-product"
            element={
              <SellerProtectedRoute>
                <ShopCreateProduct />
              </SellerProtectedRoute>
            }
          />
          <Route
            path="/dashboard-orders"
            element={
              <SellerProtectedRoute>
                <ShopAllOrders />
              </SellerProtectedRoute>
            }
          />
          <Route
            path="/dashboard-refunds"
            element={
              <SellerProtectedRoute>
                <ShopAllRefunds />
              </SellerProtectedRoute>
            }
          />
          <Route
            path="/order/:id"
            element={
              <SellerProtectedRoute>
                <ShopOrderDetails />
              </SellerProtectedRoute>
            }
          />
          <Route
            path="/dashboard-products"
            element={
              <SellerProtectedRoute>
                <ShopAllProducts />
              </SellerProtectedRoute>
            }
          />
          <Route
            path="/dashboard-create-event"
            element={
              <SellerProtectedRoute>
                <ShopCreateEvents />
              </SellerProtectedRoute>
            }
          />
          <Route
            path="/dashboard-events"
            element={
              <SellerProtectedRoute>
                <ShopAllEvents />
              </SellerProtectedRoute>
            }
          />
          <Route
            path="/dashboard-coupouns"
            element={
              <SellerProtectedRoute>
                <ShopAllCoupouns />
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
    </div>
  );
}

export default App;

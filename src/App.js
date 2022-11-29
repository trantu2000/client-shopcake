import { useEffect, useState } from "react";
import "./App.css";
import { Box, Container, Stack, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import theme, { Colors } from "./styles/theme";
import Footer from "./Components/Footer";
import { UIProvider } from "./context/ui";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import ShopingCart from "./Pages/ShopingCart";

import store from "./Redux/Store";
import { loadUser } from "./Redux/Actions/userActions";
import MiniDrawer from "./Pages/Admin";
import { useSelector } from "react-redux";
import Products from "./Pages/Admin/Pages/Products";
import AppBarNew from "./Components/AppBarNew";
import ProductDetail from "./Pages/ProductDetail";
import Shipping from "./Pages/Shipping";
import Confirm from "./Pages/ConfirmOrder";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Payment from "./Pages/Payment";
import axios from "axios";
import OrderSuccess from "./Pages/OrderSuccess";
import ListOrder from "./Pages/ListOrder";
import ProtectedRoute from "./ProtectedRoute";
import OrderListsAdmin from "./Pages/Admin/Pages/OrderLists";
import ProcessOrder from "./Pages/Admin/Pages/ProcessOrder";
import ProductListsAdmin from "./Pages/Admin/Pages/ProductLists";
import UpdateProduct from "./Pages/Admin/Pages/UpdateProduct";
import NewProduct from "./Pages/Admin/Pages/NewProduct";
import UserLists from "./Pages/Admin/Pages/UserLists";
import UpdateUser from "./Pages/Admin/Pages/UpdateUser";
import Profile from "./Pages/Profile";
import UpdateProfile from "./Pages/UpdateProfile";
import UpdatePassword from "./Pages/UpdatePassword";
import { apiUrl } from "./Redux/Constants/apiUrl";

function App() {

  useEffect(() => {
    store.dispatch(loadUser());
    async function getStripApiKey() {
      const { data } = await axios.get(`/api/v1/stripeapi`);

      setStripeApiKey(data.stripeApiKey);
    }
    // "proxy": "http://127.0.0.1:6000"

    getStripApiKey();
  }, []);

  const { user, isAuthenticated, loading } = useSelector((state) => state.auth);

  const [stripeApiKey, setStripeApiKey] = useState("");
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Container
          disableGutters
          maxWidth="xl"
          sx={{
            background: "#fff",
          }}
        >
          <Stack>
            <UIProvider>
              {/* <Appbar /> */}
              <AppBarNew />

              <Route path="/" exact component={Home} />
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Route path="/shop" component={Shop} />
              <Route path="/search/:keyword" component={Shop} />
              <Route path="/contact" component={Contact} />
              <Route path="/about" component={About} />
              <Route path="/blog" component={Blog} />
              <Route path="/shoping-cart" component={ShopingCart} />
              <Route path="/product/:id" component={ProductDetail} />

              <Route path="/admin-products" component={Products} />
              <Route path="/shipping" component={Shipping} />
              <Route path="/confirm" component={Confirm} />
              <Route path="/order-success" component={OrderSuccess} />
              <ProtectedRoute path="/orders/me" component={ListOrder} exact />

              <ProtectedRoute path="/me" component={Profile} />
              <ProtectedRoute
                path="/update-profile"
                component={UpdateProfile}
              />
              <ProtectedRoute
                path="/password/update"
                component={UpdatePassword}
              />

              {stripeApiKey && (
                <Elements stripe={loadStripe(stripeApiKey)}>
                  <Route path="/payment" component={Payment} />
                </Elements>
              )}

              {/* admin */}

              <ProtectedRoute
                path="/dashboard"
                isAdmin={true}
                component={MiniDrawer}
                exact
              />
              <ProtectedRoute
                path="/admin/orders"
                component={OrderListsAdmin}
                exact
              />
              <ProtectedRoute
                path="/admin/order/:id"
                isAdmin={true}
                component={ProcessOrder}
                exact
              />
              <ProtectedRoute
                path="/admin/products"
                isAdmin={true}
                component={ProductListsAdmin}
                exact
              />
              <ProtectedRoute
                path="/admin/product/:id"
                isAdmin={true}
                component={UpdateProduct}
                exact
              />
              <ProtectedRoute
                path="/admin/product/"
                isAdmin={true}
                component={NewProduct}
                exact
              />

              <ProtectedRoute
                path="/admin/users/"
                isAdmin={true}
                component={UserLists}
                exact
              />
              <ProtectedRoute
                path="/admin/user/:id"
                isAdmin={true}
                component={UpdateUser}
                exact
              />

              {!loading && (!isAuthenticated ||user?.role !== "admin") && (
                <>
                  <Footer />
                  <Box>
                    <Typography
                      sx={{
                        bgcolor: Colors.black,
                        p: 3,
                        color: Colors.white,
                        pl: 20,
                      }}
                    >
                      Copyright &copy;2022 All rights reserved | Shop cake
                    </Typography>
                  </Box>
                </>
              )}
              {/* <Footer /> */}

              {/* <AppDrawer /> */}
            </UIProvider>
          </Stack>
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;

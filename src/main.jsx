import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import App from "./App";
import CartPage from "./routes/cart/cartPage";
import WishPage from "./routes/wish/wishPage";
import HomePage from "./routes/home/homePage";
import { Provider } from "react-redux";
import { store } from "./store/store";
import ProductPage from "./routes/products/productPage";
import ProductDetailsPage from "./routes/products/productDetails/product.detailsPage";
import LoginPage from "./routes/login/loginPage";
import { ContextProvider } from "./Auth";
import RequireAuth from "./RequireAuth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },

      {
        path: "/products",
        element: (
          <div id="detail">
            <Outlet />
          </div>
        ),
        children: [
          {
            path: "",
            element: <ProductPage />,
          },

          {
            path: ":productId",
            element: <ProductDetailsPage />,
          },
        ],
      },

      {
        path: "/cart",
        element: (
          <RequireAuth>
            <CartPage />,
          </RequireAuth>
        ),
      },
      {
        path: "/wish",
        element: <WishPage />,
      },

      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ContextProvider>
        <RouterProvider router={router} />
      </ContextProvider>
    </Provider>
  </React.StrictMode>
);

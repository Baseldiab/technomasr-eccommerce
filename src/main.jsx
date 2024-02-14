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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      // {
      //   path: "/products",
      //   element: <ProductPage />,
      // },
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
        element: <CartPage />,
      },
      {
        path: "/wish",
        element: <WishPage />,
      },

      // {
      //   path: "login",
      //   element: (
      //     <RequireLogin>
      //       <Login />,
      //     </RequireLogin>
      //   ),
      // },
      // {
      //   path: "register",

      //   element: (
      //     <RequireLogin>
      //       <Register />
      //     </RequireLogin>
      //   ),
      // },
      // {
      //   path: "profile",
      //   element: (
      //     <RequireAuth>
      //       <Profile />
      //     </RequireAuth>
      //   ),
      // },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <ContextProvider> */}
      <RouterProvider router={router} />
      {/* </ContextProvider> */}
    </Provider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import CartPage from "./routes/cart/cartPage";
import WishPage from "./routes/wish/wishPage";
import HomePage from "./routes/home/homePage";
import { Provider } from "react-redux";
import { store } from "./store/store";

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

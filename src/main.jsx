import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import CartPage from "./routes/cart/cartPage";
import WishPage from "./routes/wish/wishPage";
import HomePage from "./routes/home/homePage";

// import Home from "./Home-page/Home";
// import { ContextProvider } from "./Auth/Auth.js";
// import Login from "./loginPage/Login.tsx";
// import Register from "./RegisterPage/Register.tsx";
// import Profile from "./profilePage/Profile.tsx";
// import RequireAuth from "./Require-Auth/Require-auth.tsx";
// import RequireLogin from "./Require-Auth/Require-login.tsx";

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
    {/* <ContextProvider> */}
    <RouterProvider router={router} />
    {/* </ContextProvider> */}
  </React.StrictMode>
);

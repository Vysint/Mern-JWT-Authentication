import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  createRoutesFromElements,
  RouterProvider,
  createBrowserRouter,
  Route,
} from "react-router-dom";
import Homescreen from "./screens/homescreen/Homescreen.jsx";
import LoginScreen from "./screens/Loginscreen/LoginScreen.jsx";
import RegisterScreen from "./screens/registerscreen/RegisterScreen.jsx";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Homescreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

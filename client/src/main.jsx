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
import store from "./store.js";
import { Provider } from "react-redux";
import ProfileScreen from "./screens/profileScreen/ProfileScreen.jsx";
import "./index.css";
import PrivateRoute from "./components/private/PrivateRoute.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Homescreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      {/* Private Routes */}
      <Route path="" element={<PrivateRoute />}>
        <Route path="/profile" element={<ProfileScreen />} />
      </Route>
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);

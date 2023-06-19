import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default App;

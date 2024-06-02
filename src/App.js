import React from "react";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  return (
    <div>
      <Navbar />
      {/*   <Outlet/>  / for children */}
    </div>
  );
}

export default App;

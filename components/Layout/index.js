import React from "react";
import { Countries } from "./Countries";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className=" m-5 lg:mx-96">
      <Navbar />
      <Countries />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

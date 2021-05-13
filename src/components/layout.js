import React from "react";
import { Header } from "./common/header/Header";
import { Navbar } from "./common/navbar/Navbar";
import { Slider } from "./common/slider/Slider";
import { Footer } from "./common/footer/Footer";
export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      <Slider />
      {children}
      <Footer />
    </>
  );
};

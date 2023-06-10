import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";


const layout = ({ children }) => {
  return (
    <>
      <Head>
        <title> Por favor Funciona</title>
      </Head>
      <Navbar className="nav-c"></Navbar>
      <main className="main-c">{children}</main>
      <Footer className="footer-c"></Footer>
    </>
  );
};

export default layout;

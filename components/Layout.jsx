import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MobileMenu from "./MobileMenu";
import Head from "next/head";



const layout = ({ children }) => {
  return (
    <>
      <Head>
        <title> Template de Site</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      
      </Head>
      <MobileMenu></MobileMenu>
      <Navbar></Navbar>
      <main className="main-c">{children}</main>
      <Footer></Footer>
    </>
  );
};

export default layout;

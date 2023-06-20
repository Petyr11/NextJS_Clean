import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";


const layout = ({ children }) => {
  return (
    <>
      <Head>
        <title> Template de Site</title>
      </Head>
      <Navbar></Navbar>
      <main className="main-c">{children}</main>
      <Footer></Footer>
    </>
  );
};

export default layout;

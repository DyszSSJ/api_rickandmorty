import Head from "next/head";
import React from "react";
import Header from "./Header";

const Layout = ({ children, paginas }) => {
  return (
    <>
      <Head>
        <title>Rick And Morty API - {paginas}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/rick-and-morty-logo.png" />
      </Head>
      <Header />
      {children}
      {/* <Footer/> */}
    </>
  );
};

export default Layout;

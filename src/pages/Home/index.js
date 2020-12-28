import React, { useEffect } from "react";

import Hero from "../../parts/Hero";
import Steps from "../../parts/Steps";
import Upfile from "../../parts/Upfile";
import Search from "../../parts/Search";
import Services from "../../parts/Services";
import Footer from "../../parts/Footer";
import Navbar from "../../components/Navbar";

import "./Home.scss";

export default function Home() {
  useEffect(() => {
    document.title = "Whatnime";
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <Steps />
      <Upfile />
      <Search />
      <Services />
      <Footer />
    </div>
  );
}

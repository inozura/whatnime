import React, { useEffect, useState } from "react";

import Hero from "../../parts/Hero";
import Steps from "../../parts/Steps";
import Upfile from "../../parts/Upfile";
import Search from "../../parts/Search";
import Services from "../../parts/Services";
import Footer from "../../parts/Footer";
import Navbar from "../../components/Navbar";

import "./Home.scss";
import { getAiringAnime } from "../../model/jikanAPI";
import { LoadingOutlined } from "@ant-design/icons";
import { List } from "../../parts/List";
import { MobilePromote } from "../../parts/MobilePromote";

export default function Home() {
  const [dataAiringAnime, setDataAiringAnime] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const data = await getAiringAnime();
      setDataAiringAnime(data.top.slice(0, 12));
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    document.title = "Whatnime";
    window.scrollTo(0, 0);

    return () => {
      setIsLoading(false);
      setDataAiringAnime([]);
    };
  }, []);

  return isLoading ? (
    <div className="loading-screen">
      <LoadingOutlined
        style={{ color: "rgba(0, 68, 255, 0.9)", fontSize: 50 }}
      />
    </div>
  ) : (
    <div className="homepage">
      <Navbar />
      <Hero />
      <MobilePromote />
      <List data={dataAiringAnime} />
      <Steps />
      <Upfile />
      <Search />
      <Services />
      <Footer />
    </div>
  );
}

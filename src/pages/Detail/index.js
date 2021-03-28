import React, { useEffect, useState } from "react";
import { useParams, Redirect } from "react-router-dom";
import ReactPlayer from "react-player/lazy";
import StarIcon from "@material-ui/icons/Star";
import Fade from "react-reveal/Fade";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import LoadingChara from "../../assets/gif/LoadingChara.gif";
import "./Detail.scss";
import Character from "../../parts/Character";
import Staff from "../../parts/Staff";
import Footer from "../../parts/Footer";
import Back from "../../components/ButtonBack";
import Logo from "../../assets/png/Logo.png";
import { getCharaList, getDetailAnime } from "../../model/jikanAPI";
import SuzumiyaLogoSad from "../../assets/png/suzumiya-sad.png";

export default function Detail() {
  const [malFetched, setMalFetched] = useState({});
  const [dataStaff, setDataStaff] = useState();
  const [dataChar, setDataChar] = useState();
  const [loadingFetch, setLoadingFetch] = useState(false);

  let { idmal } = useParams();

  useEffect(() => {
    setLoadingFetch(true);
    if (idmal === null) {
      <Redirect to="/404" />;
    }

    const getData = async () => {
      try {
        setLoadingFetch(true);
        const dataAnime = await getDetailAnime(idmal);
        const dataChara = await getCharaList(idmal);
        setMalFetched(dataAnime);
        setDataChar(dataChara.characters);
        setDataStaff(dataChara.staff);
        document.title = `${dataAnime.title} - Whatnime`;
      } catch (err) {
        console.log(err);
      } finally {
        setLoadingFetch(false);
      }
    };

    getData();

    return () => {
      setDataChar([]);
      setDataStaff([]);
      setLoadingFetch(false);
      setMalFetched([]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="detail-page">
      {loadingFetch ? (
        <div className="loading-detail">
          <div className="d-flex justify-content-center w-100">
            <img
              src={LoadingChara}
              alt="imgLumine"
              width="7%"
              className="imgLoading"
            />
          </div>
        </div>
      ) : (
        <div>
          <section className="hero-detail">
            <div className="bg-overlay"></div>
            <div className="navbar-detail">
              <div className="container">
                <div
                  className="row justify-content-center align-items-center"
                  style={{ paddingLeft: 15, paddingRight: 15 }}
                >
                  <Fade left duration={700}>
                    <Back style={{ backgroundColor: "white" }} isSmall />
                  </Fade>
                  <Fade right duration={700}>
                    <img
                      src={Logo}
                      className="ml-auto"
                      width="59"
                      height="59"
                      alt=""
                      loading="lazy"
                    />
                  </Fade>
                </div>
              </div>
            </div>
          </section>
          <section className="desc">
            <div className="container">
              <div className="row">
                <div className="col-4 col-md-3">
                  <div className="img-wrap">
                    <LazyLoadImage
                      className="img-cover"
                      src={malFetched.image_url}
                      alt="img-cover"
                      effect="black-and-white"
                    />
                  </div>
                </div>
                <div className="col-8 col-md-9">
                  <Fade top duration={700}>
                    <h3 className="title">{malFetched.title}</h3>
                  </Fade>
                  <div className="genres">
                    {malFetched.genres &&
                      malFetched.genres.map((genre, index) => (
                        <Fade left duration={900 + 0.2 * index} key={index}>
                          <span>
                            {malFetched.genres.length === index + 1
                              ? `${genre.name}`
                              : `${genre.name}, `}
                          </span>
                        </Fade>
                      ))}
                  </div>
                  <Fade bottom duration={900}>
                    <div className="card">
                      <div className="row align-items-center justify-content-center">
                        <div className="col-6 col-md-3 row align-items-center">
                          <StarIcon style={{ color: "#FFD700" }} />
                          {malFetched.score ? malFetched.score : "  - "}
                        </div>
                        <div className="col-6 col-md-3">
                          Ranked{" "}
                          <b>#{malFetched.rank ? malFetched.rank : "  - "}</b>
                        </div>
                        <div className="col-6 col-md-3">
                          Popularity <b>#{malFetched.popularity}</b>
                        </div>
                        <div className="col-6 col-md-3">
                          Members <b>#{malFetched.members}</b>
                        </div>
                      </div>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </section>
          <div className="synopsis-sm container">
            <div className="wrap-desc">
              <div className="row">
                <div className="col-md-6">
                  {malFetched.trailer_url ? (
                    <div className="player-wrapper">
                      <ReactPlayer
                        className="react-player"
                        url={malFetched.trailer_url}
                        controls={true}
                        width="100%"
                        height="100%"
                      />
                    </div>
                  ) : (
                    <div className="no-video-wrapper">
                      <LazyLoadImage
                        src={SuzumiyaLogoSad}
                        alt="no video"
                        effect="blur"
                        className="no-video"
                        wrapperClassName="wrapper-ClassName"
                      />
                      <span>Sorry no video preview</span>
                    </div>
                  )}
                </div>
                <div className="col-md-6 p-4 p-md-3">
                  <p className="desc-title">Synopsis</p>
                  <p className="desc-sm">{malFetched.synopsis}</p>
                </div>
              </div>
            </div>
          </div>
          <section className="rating">
            <div className="container">
              <Fade bottom duration={900}>
                <div className="card">
                  <div className="container">
                    <div className="row">
                      <div className="col-6 col-md-3 p-1">
                        <div className="container">
                          <div className="row align-items-center">
                            <StarIcon style={{ color: "#FFD700" }} />
                            {malFetched.score}
                          </div>
                        </div>
                      </div>
                      <div className="col-6 col-md-3 p-1">
                        Ranked <b>#{malFetched.rank}</b>
                      </div>
                      <div className="col-6 col-md-3 p-1">
                        Popularity <b>#{malFetched.popularity}</b>
                      </div>
                      <div className="col-6 col-md-3 p-1">
                        Members <b>#{malFetched.members}</b>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </section>
          <section className="information mb-5">
            <div className="container">
              <h4>Information</h4>
              <Fade bottom duration={700}>
                <div className="card pb-0 pt-0">
                  <div className="row pb-3 pt-3">
                    <div className="col-md-4">
                      <p>
                        Status : {malFetched.airing ? "Ongoing" : "Finished"}
                      </p>
                      <p>Rating : {malFetched.rating}</p>
                      <p>Source : {malFetched.source}</p>
                      <p>Total episodes : {malFetched.episodes}</p>
                      <p>Duration : {malFetched.duration}</p>
                      <p>
                        Opening :{" "}
                        {malFetched.opening_themes &&
                          malFetched.opening_themes[0]}
                      </p>
                    </div>
                    <div className="col-md-4">
                      <p>English Title : {malFetched.title_english}</p>
                      <p>Native Title : {malFetched.title_japanese}</p>
                      <p>Type : {malFetched.type}</p>
                      <p>
                        Studio :{" "}
                        {malFetched.studios !== undefined &&
                        malFetched.studios.length > 0
                          ? malFetched.studios[0].name
                          : "-"}
                      </p>
                      <p>Broadcast : {malFetched.broadcast}</p>
                    </div>
                  </div>
                  <LazyLoadImage
                    className="img-anime"
                    effect="blur"
                    src="https://www.freeiconspng.com/uploads/anime-png-7.png"
                    alt="anime"
                  />
                </div>
              </Fade>
            </div>
          </section>
          {dataChar ? (
            <Character data={dataChar.slice(0, 8)} />
          ) : (
            "No Characters"
          )}
          {dataStaff ? (
            <Staff data={dataStaff ? dataStaff.slice(0, 4) : dataStaff} />
          ) : (
            "No Staff"
          )}
          <Footer />
        </div>
      )}
    </div>
  );
}

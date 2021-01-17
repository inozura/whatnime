import React, { useEffect, useState } from "react";
import { useParams, Redirect } from "react-router-dom";
import ReactPlayer from "react-player/lazy";
import StarIcon from "@material-ui/icons/Star";
import axios from "axios";
import Fade from "react-reveal/Fade";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import "./Detail.scss";
import Character from "../../parts/Character";
import Staff from "../../parts/Staff";
import Footer from "../../parts/Footer";
import Back from "../../components/ButtonBack";
import Logo from "../../assets/png/Logo.png";

export default function Detail() {
  const [malFetched, setMalFetched] = useState();
  const [loadingFetch, setLoadingFetch] = useState(true);
  const [anilistFetched, setAnilistFetched] = useState([]);

  let { idmal, idanilist } = useParams();

  useEffect(() => {
    if (idmal === null) {
      <Redirect to="/" />;
    }

    const getData = async () => {
      setLoadingFetch(true);
      await axios({
        url: `https://api.jikan.moe/v3/anime/${idmal}`,
      })
        .then(async (res) => {
          setMalFetched(res);
          // console.log(res);
          document.title = `${res.data.title} - Whatnime`;

          await axios({
            url: `https://graphql.anilist.co`,
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            data: JSON.stringify({
              query: `query ($id: Int) {
                    Media (id: $id, type: ANIME) { 
                      id
                      bannerImage
                      title {
                        romaji
                        english
                        native
                      }
                      season
                      trailer {
                        site
                        thumbnail
                        id
                      }
                      genres
                      description
                      staff {
                        nodes {
                          name {
                            full
                          }
                          image {
                            large
                          }
                          language
                          staffMedia {
                            edges {
                              staffRole
                            }
                          }
                        }
                      }
                      characters {
                        edges {
                          role
                          node {
                            name {
                              full
                            }
                            image {
                              large
                            }
                          }
                          voiceActors {
                            name {
                              full
                            }
                            language
                            image {
                              large
                            }
                          }
                        }
                      }
                    }
                  }`,
              variables: { id: idanilist },
            }),
          }).then((res2) => {
            setAnilistFetched(res2);
            // console.log(res2);
            setLoadingFetch(false);
            window.scrollTo(0, 0);
          });
        })
        .catch((err) => console.log(err));
    };
    // get data
    getData();
  }, [idmal, idanilist]);

  return (
    <div className="detail-page">
      {loadingFetch ? (
        <div className="loading-detail">
          <div className="d-flex justify-content-center w-100">
            <img
              src="https://media2.giphy.com/media/UWPUmGBxBKDeNfi6N6/giphy.gif"
              alt="imgLumine"
              width="13%"
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
                      src={malFetched.data.image_url}
                      alt="img-cover"
                      effect="black-and-white"
                    />
                  </div>
                </div>
                <div className="col-8 col-md-9">
                  <Fade top duration={700}>
                    <h3 className="title">{malFetched.data.title}</h3>
                  </Fade>
                  <div className="genres">
                    {anilistFetched.data.data.Media.genres.map(
                      (genre, index) => (
                        <Fade left duration={900 + 0.2 * index} key={index}>
                          <span>{genre}, </span>
                        </Fade>
                      )
                    )}
                  </div>
                  <Fade bottom duration={900}>
                    <div className="card">
                      <div className="row align-items-center justify-content-center">
                        <div className="col-6 col-md-3 row align-items-center">
                          <StarIcon style={{ color: "#FFD700" }} />
                          {malFetched.data.score}
                        </div>
                        <div className="col-6 col-md-3">
                          Ranked <b>#{malFetched.data.rank}</b>
                        </div>
                        <div className="col-6 col-md-3">
                          Popularity <b>#{malFetched.data.popularity}</b>
                        </div>
                        <div className="col-6 col-md-3">
                          Members <b>#{malFetched.data.members}</b>
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
                  <div className="player-wrapper">
                    <ReactPlayer
                      className="react-player"
                      url={malFetched.data.trailer_url}
                      controls={true}
                      width="100%"
                      height="100%"
                    />
                  </div>
                </div>
                <div className="col-md-6 p-4 p-md-3">
                  <p className="desc-title">Synopsis</p>
                  <p className="desc-sm">{malFetched.data.synopsis}</p>
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
                            {malFetched.data.score}
                          </div>
                        </div>
                      </div>
                      <div className="col-6 col-md-3 p-1">
                        Ranked <b>#{malFetched.data.rank}</b>
                      </div>
                      <div className="col-6 col-md-3 p-1">
                        Popularity <b>#{malFetched.data.popularity}</b>
                      </div>
                      <div className="col-6 col-md-3 p-1">
                        Members <b>#{malFetched.data.members}</b>
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
                        Status :{" "}
                        {malFetched.data.airing ? "Ongoing" : "Finished"}
                      </p>
                      <p>Rating : {malFetched.data.rating}</p>
                      <p>Source : {malFetched.data.source}</p>
                      <p>Total episodes : {malFetched.data.episodes}</p>
                      <p>Duration : {malFetched.data.duration}</p>
                      <p>
                        Opening :{" "}
                        {malFetched.data.opening_themes[0] &&
                          malFetched.data.opening_themes[0]}
                      </p>
                    </div>
                    <div className="col-md-4">
                      <p>English Title : {malFetched.data.title_english}</p>
                      <p>Native Title : {malFetched.data.title_japanese}</p>
                      <p>Type : {malFetched.data.type}</p>
                      <p>
                        Studio :{" "}
                        {malFetched.data.studios[0] &&
                          malFetched.data.studios[0].name}
                      </p>
                      <p>Broadcast : {malFetched.data.broadcast}</p>
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
          <Character char={anilistFetched.data.data.Media.characters} />
          <Staff staffFetched={anilistFetched.data.data.Media.staff} />
          <Footer />
        </div>
      )}
    </div>
  );
}

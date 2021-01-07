import React, { useEffect, useState, useCallback } from "react";
import { useParams, Redirect } from "react-router-dom";
import ReactPlayer from "react-player/lazy";
import StarIcon from "@material-ui/icons/Star";
import axios from "axios";

import "./Detail.scss";
// import Character from "../../parts/Character";
import Footer from "../../parts/Footer";

export default function Detail() {
  const [dataFetched, setDataFetched] = useState([]);
  const [characterFetched, setCharacterFetched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  let { id } = useParams();

  useEffect(() => {
    if (id === null) {
      <Redirect to="/" />;
    }
    setIsLoading(true);

    const getData = async () => {
      await axios({
        url: `https://api.jikan.moe/v3/anime/${id}`,
      })
        .then(async (res) => {
          setDataFetched(res.data);
          await axios({
            url: `https://api.jikan.moe/v3/anime/${id}/characters_staff`,
          }).then((res) => {
            setCharacterFetched(res);
          });
        })
        .catch((err) => console.log(err));
    };

    // get data
    getData();
    if (dataFetched) {
      setIsLoading(false);
    }
  }, []);

  return isLoading ? (
    <div className="loading-detail">
      <img
        src="https://media2.giphy.com/media/UWPUmGBxBKDeNfi6N6/giphy.gif"
        alt="imgLumine"
        width="13%"
        className="imgLoading"
      />
      <p>Loading...</p>
    </div>
  ) : (
    <div className="detail-page">
      <section className="hero">
        <div className="bg-overlay"></div>
      </section>
      <section className="desc">
        <div className="container">
          <div className="row">
            <div className="col-4 col-md-3">
              <div className="img-wrap">
                <img
                  className="img-cover"
                  src={dataFetched.image_url}
                  alt="img-cover"
                />
              </div>
            </div>
            <div className="col-8 col-md-9">
              <h3 className="title">{dataFetched.title}</h3>
              {/* {dataFetched.genres &&
                dataFetched.genres.length &&
                dataFetched.genres.map((genre) => <span>{genre},</span>)} */}
              <div className="card">
                <div className="row align-items-center justify-content-center">
                  <div className="col-6 col-md-3 row align-items-center">
                    <StarIcon style={{ color: "#FFD700" }} />
                    {dataFetched.score}
                  </div>
                  <div className="col-6 col-md-3">
                    Ranked <b>#{dataFetched.rank}</b>
                  </div>
                  <div className="col-6 col-md-3">
                    Popularity <b>#{dataFetched.popularity}</b>
                  </div>
                  <div className="col-6 col-md-3">
                    Members <b>#{dataFetched.members}</b>
                  </div>
                </div>
              </div>
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
                  url={dataFetched.trailer_url}
                  controls={true}
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
            <div className="col-md-6 p-4 p-md-3">
              <p className="desc-title">Synopsis</p>
              <p className="desc-sm">{dataFetched.synopsis}</p>
            </div>
          </div>
        </div>
      </div>
      <section className="rating">
        <div className="container">
          <div className="card">
            <div className="container">
              <div className="row">
                <div className="col-6 col-md-3 p-1">
                  <div className="container">
                    <div className="row align-items-center">
                      <StarIcon style={{ color: "#FFD700" }} />
                      {dataFetched.score}
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-3 p-1">
                  Ranked <b>#{dataFetched.rank}</b>
                </div>
                <div className="col-6 col-md-3 p-1">
                  Popularity <b>#{dataFetched.popularity}</b>
                </div>
                <div className="col-6 col-md-3 p-1">
                  Members <b>#{dataFetched.members}</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="information mb-5">
        <div className="container">
          <h4>Information</h4>
          <div className="card">
            <div className="row">
              <div className="col-md-4">
                <p>Status : {dataFetched.airing ? "Ongoing" : "Finished"}</p>
                <p>Rating : {dataFetched.rating}</p>
                <p>Source : {dataFetched.source}</p>
                <p>Total episodes : {dataFetched.episodes}</p>
                <p>Duration : {dataFetched.duration}</p>
              </div>
              <div className="col-md-4">
                <p>English Title : {dataFetched.title_english}</p>
                <p>Native Title : {dataFetched.title_japanese}</p>
                <p>Type : {dataFetched.type}</p>
                {/* <p>Studio : {dataFetched.studios[0].name}</p> */}
                <p>Broadcast : {dataFetched.broadcast}</p>
              </div>
            </div>
            <img
              className="img-anime"
              src="https://www.freeiconspng.com/uploads/anime-png-7.png"
              alt="anime"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

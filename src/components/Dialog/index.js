import React, { useState, useEffect } from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Fade from "react-reveal/Fade";

import "./Dialog.scss";
import LoadingChara from "../../assets/gif/LoadingChara.gif";

export default function AlertDialog({ data, showDialog, isUrl }) {
  const [isLoading, setIsLoading] = useState(true);
  const [dataFetched, setDataFetched] = useState([]);
  const [resData, setResData] = useState([]);

  const handleClose = () => {
    showDialog(false);
  };

  useEffect(() => {
    setIsLoading(true);
    if (!isUrl) {
      const fetchData = async () =>
        await axios({
          url: `https://trace.moe/api/search?url=${data}`,
        }).then(async (res) => {
          // console.log("res1", res);
          const result = res.data.docs[0];
          setResData(res.data.docs[0]);
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
                    title {
                      romaji
                      english
                      native
                    }
                    season
                    format
                    seasonYear
                    source
                    coverImage {
                      large
                    }
                    averageScore
                    episodes
                    genres
                  }
                }`,
              variables: { id: result.anilist_id },
            }),
          })
            .then((res2) => {
              // console.log("res2", res2);
              setDataFetched(res2);
              setIsLoading(false);
            })
            .catch((err) => {
              // Jika error atau tidak ditemukan
              console.log(err);
            });
        });
      fetchData();
    } else {
      const fetchData = async () =>
        await axios({
          url: "https://trace.moe/api/search",
          method: "POST",
          headers: { "Content-Type": "application/json" },
          data: { image: data },
        })
          .then(async (res) => {
            // console.log("res1", res);
            const result = res.data.docs[0];
            setResData(res.data.docs[0]);
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
                      title {
                        romaji
                        english
                        native
                      }
                      season
                      format
                      seasonYear
                      source
                      coverImage {
                        large
                      }
                      averageScore
                      episodes
                      genres
                    }
                  }`,
                variables: { id: result.anilist_id },
              }),
            }).then((res2) => {
              // console.log("res2", res2);
              setDataFetched(res2);
              setIsLoading(false);
            });
          })
          .catch((err) => {
            console.log(err);
          });
      fetchData();
    }

    return () => {};
  }, [data, isUrl]);

  return (
    <div>
      <Dialog
        open={true}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="md"
      >
        {isLoading ? (
          <div className="loading">
            <img
              src={LoadingChara}
              alt="imgLumine"
              width="33%"
              className="imgLoading"
              effect="opacity"
            />
          </div>
        ) : (
          <div className="dialog-content">
            <DialogContent>
              <div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="player-wrapper">
                      <img
                        className="cover-img"
                        src={dataFetched.data.data.Media.coverImage.large}
                        alt="coverIMG"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card card-desc">
                      <div className="card-body">
                        <Fade top duration={1100}>
                          <Typography variant="h6">
                            {dataFetched.data.data.Media.title.romaji}
                          </Typography>
                        </Fade>
                        <Fade left duration={950}>
                          <Rating
                            readOnly
                            max={5}
                            defaultValue={0}
                            value={
                              dataFetched.data.data.Media.averageScore / 20
                            }
                            name="rating-anime"
                          />
                        </Fade>
                        <Fade right duration={950}>
                          <div className="genre-wrapper">
                            {dataFetched.data.data.Media.genres.map(
                              (genre, index) => {
                                return <span key={index}>{genre}, </span>;
                              }
                            )}
                          </div>
                        </Fade>
                        <Fade bottom duration={990}>
                          <Typography variant="body2">
                            Season : {dataFetched.data.data.Media.seasonYear}{" "}
                            {dataFetched.data.data.Media.season}
                          </Typography>
                          <Typography variant="body2">
                            Source : {dataFetched.data.data.Media.source}
                          </Typography>
                          <Typography variant="body2">
                            Format : {dataFetched.data.data.Media.format}
                          </Typography>
                          <Typography variant="body2">
                            Episodes : {dataFetched.data.data.Media.episodes}
                          </Typography>
                        </Fade>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Close
              </Button>
              <Button color="primary" autoFocus>
                <Link
                  to={`/detail/${resData.mal_id}`}
                  className="btn btn-primary"
                >
                  Detail
                </Link>
              </Button>
            </DialogActions>
          </div>
        )}
      </Dialog>
    </div>
  );
}

Dialog.propTypes = {
  data: propTypes.array,
  showDialog: propTypes.func,
  isUrl: propTypes.bool,
};

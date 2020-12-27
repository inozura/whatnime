import React, { useState, useEffect } from "react";
import propTypes from "prop-types";
import axios from "axios";
import ReactPlayer from "react-player";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import ConverterSecond from "../../utils/SecondConverter";
import "./Dialog.scss";

export default function AlertDialog({ data, showDialog, isUrl }) {
  const [isLoading, setIsLoading] = useState(true);
  const [videoFetched, setVideoFetched] = useState([]);
  const [dataFetched, setDataFetched] = useState([]);

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
          console.log("res1", res);
          setDataFetched(res.data.docs[0]);
          const result = res.data.docs[0];
          console.log(encodeURIComponent(result.filename));
          await axios({
            url: `https://media.trace.moe/video/${
              result.anilist_id
            }/${encodeURIComponent(result.filename)}?t=${result.at}&token=${
              result.tokenthumb
            }`,
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res2) => {
              console.log("res2", res2);
              setVideoFetched(res2);
              setIsLoading(false);
            })
            .catch((err) => {
              // Jika error atau tidak ditemukan
              console.log(err);
              const fetchData = async () =>
                await axios({
                  url: `https://trace.moe/api/search?url=${data}`,
                }).then(async (res) => {
                  console.log("res1", res);
                  setDataFetched(res.data.docs[1]);
                  const result = res.data.docs[1];
                  console.log(encodeURIComponent(result.filename));
                  await axios({
                    url: `https://media.trace.moe/video/${
                      result.anilist_id
                    }/${encodeURIComponent(result.filename)}?t=${
                      result.at
                    }&token=${result.tokenthumb}`,
                    headers: {
                      "Content-Type": "application/json",
                    },
                  })
                    .then((res2) => {
                      console.log("res2", res2);
                      setVideoFetched(res2);
                      setIsLoading(false);
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                });
              fetchData();
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
            console.log("res1", res);
            setDataFetched(res.data.docs[0]);
            const result = res.data.docs[0];
            console.log(encodeURIComponent(result.filename));
            await axios({
              url: `https://media.trace.moe/video/${
                result.anilist_id
              }/${encodeURIComponent(result.filename)}?t=${result.at}&token=${
                result.tokenthumb
              }`,
              headers: { "Content-Type": "application/json" },
            }).then((res2) => {
              console.log("res2", res2);
              setVideoFetched(res2);
              setIsLoading(false);
            });
          })
          .catch((err) => {
            // Jika error atau tidak ditemukan
            console.log("error", err);
            const fetchData = async () =>
              await axios({
                url: `https://trace.moe/api/search?url=${data}`,
              }).then(async (res) => {
                console.log("res1", res);
                setDataFetched(res.data.docs[1]);
                const result = res.data.docs[1];
                console.log(encodeURIComponent(result.filename));
                await axios({
                  url: `https://media.trace.moe/video/${
                    result.anilist_id
                  }/${encodeURIComponent(result.filename)}?t=${
                    result.at
                  }&token=${result.tokenthumb}`,
                  headers: {
                    "Content-Type": "application/json",
                  },
                })
                  .then((res2) => {
                    console.log("res2", res2);
                    setVideoFetched(res2);
                    setIsLoading(false);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              });
            fetchData();
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
        maxWidth="lg"
      >
        {isLoading ? (
          <div className="loading">
            <img
              src="https://media2.giphy.com/media/UWPUmGBxBKDeNfi6N6/giphy.gif"
              alt="imgLumine"
              width="73%"
              className="imgLoading"
            />
            <p>Loading ...</p>
          </div>
        ) : (
          <div>
            <DialogTitle id="alert-dialog-title">{"Predict"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="player-wrapper">
                        <ReactPlayer
                          className="react-player"
                          url={videoFetched.config.url}
                          controls={true}
                          width="100%"
                          height="100%"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <ul class="list-group list-group-horizontal-sm mt-2 mb-3 mb-md-4 mt-mb-1">
                        <li class="list-group-item">
                          {dataFetched.season === "Movie"
                            ? "Movie Relese"
                            : `Relese ${dataFetched.season}`}
                        </li>
                        <li class="list-group-item">
                          {dataFetched.season === "Movie"
                            ? "Eps 1"
                            : `Eps ${dataFetched.episode}`}
                        </li>
                      </ul>
                      <ul class="list-group">
                        <li class="list-group-item active">
                          <p className="text-right">Title</p>
                          <span>
                            {dataFetched.title_romaji} /{" "}
                            {dataFetched.title_native}
                          </span>
                        </li>
                        <li class="list-group-item">
                          <p className="text-right">English Title</p>
                          <span>{dataFetched.title_english}</span>
                        </li>
                        <li class="list-group-item">
                          <p className="text-right">At</p>
                          <span>{ConverterSecond(dataFetched.at)}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Disagree
              </Button>
              <Button onClick={handleClose} color="primary" autoFocus>
                Agree
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

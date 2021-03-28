import React from "react";
import { StarFilled } from "@ant-design/icons";
import { Fade } from "react-reveal";

import "./List.scss";
import { Link } from "react-router-dom";

export const List = ({ data }) => {
  return (
    <section className="list">
      <div className="container">
        <h3 className="mb-3 mb-md-4 text-center text-md-start">Airing Anime</h3>
        <div className="row">
          {data.map((item, index) => (
            <Fade duration={500 + index * 150}>
              <div
                className="d-flex col-6 col-md-3 p-2 px-md-4 py-md-5 justify-content-center align-items-center"
                key={index}
              >
                <div
                  className="card list"
                  style={{ backgroundImage: `url(${item.image_url})` }}
                >
                  <div className="coverbackground" />
                  <Link
                    to={`/detail/${item.mal_id}`}
                    className="stretched-link position-absolute"
                    style={{ top: 0, bottom: 0, left: 0, right: 0 }}
                  />
                  <div className="top-card">
                    <span className="text-top-card">{item.rank}</span>
                    <div className="wrap-rating">
                      <StarFilled style={{ color: "#fff" }} />
                      <span className="text-top-card ml-2">{item.score}</span>
                    </div>
                  </div>
                  <div className="bottom-card">
                    <h5 className="text-title">{item.title}</h5>
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};

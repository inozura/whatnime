import React from "react";
import Fade from "react-reveal/Fade";

import imgFile from "../../assets/svg/icons8-image-file.svg";
import urlLink from "../../assets/svg/icons8-search.svg";

import "./Steps.scss";

export default function Steps() {
  return (
    <section className="steps">
      <div className="container">
        <h3 className="text-center mb-5">There are two ways</h3>
        <div className="row justify-content-center align-items-center">
          <Fade bottom duration={1700}>
            <div>
              <div className="card">
                <img src={imgFile} className="card-img-top" alt="free" />
                <div className="card-body">
                  <h2 className="card-title text-center">Image File</h2>
                  <p className="card-text">
                    Use the image picture of the scene anime from your
                    localstorage and upload it in here to seacrh anime
                  </p>
                </div>
              </div>
            </div>
          </Fade>
          <Fade bottom duration={2300}>
            <div>
              <div className="card">
                <img src={urlLink} className="card-img-top" alt="free" />
                <div className="card-body">
                  <h2 className="card-title text-center">Url Link</h2>
                  <p className="card-text">
                    Use url link of image scene from other website like facebook
                    or google to seacrh the anime
                  </p>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}

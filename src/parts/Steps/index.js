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
              <div class="card">
                <img src={imgFile} class="card-img-top" alt="free" />
                <div class="card-body">
                  <h2 class="card-title text-center">Image File</h2>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </Fade>
          <Fade bottom duration={2300}>
            <div>
              <div class="card">
                <img src={urlLink} class="card-img-top" alt="free" />
                <div class="card-body">
                  <h2 class="card-title text-center">Url Link</h2>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
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

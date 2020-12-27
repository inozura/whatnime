import React from "react";
import Fade from "react-reveal/Fade";

import Dropfile from "../../components/Dropfile";
import "./Upfile.scss";

export default function Upfile() {
  return (
    <section className="upfile">
      {/* <img src={wave1} alt="wave" className="bg-wave" /> */}
      <div className="container">
        <div className="row align-items-center justify-content-center position-relative">
          <img
            className="img-anime"
            src="https://www.freeiconspng.com/uploads/anime-png-7.png"
            alt="anime"
          />
          <div className="col-md-8">
            <Fade bottom duration={1300}>
              <div className="card upfile">
                <Dropfile />
              </div>
            </Fade>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </section>
  );
}

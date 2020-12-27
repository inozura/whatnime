import React from "react";
import Fade from "react-reveal/Fade";
import "./Hero.scss";

export default function Hero() {
  return (
    <section className="hero text-white">
      <div className="bg-overlay"></div>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <Fade left duration={1500}>
                <h1 className="h2 title">Search any anime</h1>
              </Fade>
              <Fade bottom duration={2700}>
                <p className="subtitle">
                  You just need one screenshot picture or <br /> url link to
                  search anime you want
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

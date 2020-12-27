import React from "react";
import Fade from "react-reveal/Fade";

import "./Services.scss";
import Free from "../../assets/svg/icons8-padlock.svg";
import Fast from "../../assets/svg/icons8-ookla-speedtest.svg";
import Updated from "../../assets/svg/icons8-synchronize.svg";

export default function Services() {
  return (
    <section className="services">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Fade left duration={1300}>
              <div>
                <div class="card">
                  <img src={Free} class="card-img-top" alt="free" />
                  <div class="card-body">
                    <h2 class="card-title">Free</h2>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-4">
            <Fade bottom duration={1400}>
              <div>
                <div class="card">
                  <img src={Fast} class="card-img-top" alt="free" />
                  <div class="card-body">
                    <h2 class="card-title">Fast</h2>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-4">
            <Fade right duration={1300}>
              <div>
                <div class="card">
                  <img src={Updated} class="card-img-top" alt="free" />
                  <div class="card-body">
                    <h2 class="card-title">Updated</h2>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
}

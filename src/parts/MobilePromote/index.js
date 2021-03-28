import React from "react";
import { Fade } from "react-reveal";
import PlayStoreIcon from "../../assets/png/playstore-anime.png";
import Button from "../../components/Button";
import WaveSVG from "../../assets/svg/wave.svg";

import "./MobilePromote.scss";

export const MobilePromote = () => {
  return (
    <Fade bottom duration={900}>
      <section className="mobile-promote">
        <div className="container">
          <div className="card mobile-promotion">
            <img src={WaveSVG} alt="wave" className="wave-bg" />
            <h5 className="main-title d-none d-md-block text-center p-4">
              Now Available in mobile app!
            </h5>
            <div className="row">
              <div className="col-7 col-md-8 d-flex justify-content-center align-items-center flex-column-reverse flex-md-row">
                <img src={PlayStoreIcon} className="img-icon" alt="icon" />
                <h5 className="main-title ml-5 d-block d-md-none">
                  Available in mobile app
                </h5>
              </div>
              <div className="col-5 col-md-4 d-flex justify-content-center align-items-center">
                <Button
                  type="link"
                  className="btn-primary btn btn-md"
                  href="/Downloads/Whatnime-V1.0.0-main.apk"
                  isExternal
                >
                  Download
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
};

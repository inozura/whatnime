import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import Back from "../../components/ButtonBack";
import Footer from "../../parts/Footer";
import Button from "../../components/Button";
import "./About.scss";

export default function About() {
  useEffect(() => {
    document.title = "About";
    window.scrollTo(0, 0);
  });

  return (
    <div className="about-page">
      <div className="main-page">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Fade left duration={900}>
                <div className="left-content">
                  <Back className={"mb-4 ml-3"} />
                  <div className="img-wrapper">
                    <LazyLoadImage
                      className="main-img"
                      src="https://images3.alphacoders.com/136/thumb-1920-136595.jpg"
                      alt="mainimg"
                      effect="opacity"
                    />
                  </div>
                </div>
              </Fade>
            </div>
            <div className="col-md-6">
              <div className="content">
                <Fade top duration={900}>
                  <h2>About us</h2>
                </Fade>
                <p>
                  whatanime is a website that can predict anime, from an image
                  that is from the anime scene. This website is free to use and
                  supports all platforms such as laptops or mobile because it
                  has a responsive design.
                </p>
                <p>
                  The origin of the idea of ​​creating this website was by the
                  existence of a telegram bot which can also predict an anime
                  from an anime scene image, called "WAIT - What Anime Is This",
                  maybe you already know about the existence of the telegram
                  bot. And then I decided to make a bot that can predict an
                  anime but on a website platform so that everyone can use it,
                  because not everyone has a smartphone or telegram account.
                </p>
                <p>
                  I design this website as attractive as possible so that all
                  people have an attractive impression of this website, so they
                  can use this website at any time. For now this website is in
                  the BETA stage, because it is still in the development stage
                  as well as other technical problems.
                </p>
                <p>
                  The features of this website are very interesting because they
                  can fetch all the data from the anime that visitors want, such
                  as the Promotion Video (PV) feature, player characters, voice
                  actors, production staff, and many others.
                </p>
                <br />
                <br />
                <br />
                <p>
                  I will always develop this website in the future, and I will
                  add other interesting features. If you have suggestions for
                  developing this website, you can contact my social media
                  account here
                </p>

                <div className="row mb-3 justify-content-center align-items-center">
                  <div className="icon">
                    <Button
                      isExternal
                      type="link"
                      href="https://www.facebook.com/iNoozura"
                      target="_blank"
                      style={{
                        textDecorationThickness: "none",
                        color: "rgba(15, 49, 141, 0.705)",
                        cursor: "pointer",
                      }}
                      className="mr-2"
                    >
                      <FacebookIcon fontSize="large" />
                    </Button>
                    <Button
                      isExternal
                      type="link"
                      target="_blank"
                      href="https://instagram.com/inozura"
                      style={{
                        textDecorationThickness: "none",
                        color: "rgba(15, 49, 141, 0.705)",
                        cursor: "pointer",
                      }}
                      className="mr-2"
                    >
                      <InstagramIcon fontSize="large" />
                    </Button>
                    <Button
                      isExternal
                      type="link"
                      target="_blank"
                      href="https://twitter.com/inoozura"
                      style={{
                        textDecorationThickness: "none",
                        color: "rgba(15, 49, 141, 0.705)",
                        cursor: "pointer",
                      }}
                      className="mr-2"
                    >
                      <TwitterIcon fontSize="large" />
                    </Button>
                    <Button
                      isExternal
                      type="link"
                      target="_blank"
                      href="https://www.linkedin.com/in/novandra-zulfi-ramadhan-33ab2a1aa/"
                      style={{
                        textDecorationThickness: "none",
                        color: "rgba(15, 49, 141, 0.705)",
                        cursor: "pointer",
                      }}
                      className="mr-2"
                    >
                      <LinkedInIcon fontSize="large" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

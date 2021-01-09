import React from "react";
import "./Character.scss";
import propTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function Character({ char }) {
  return (
    <div>
      <section className="character">
        <div className="container">
          <h4>Characters</h4>
          <div className="row">
            {char.edges.slice(0, 8).map((character, index) => (
              <div className="col-md-6" key={`${index}-card`}>
                <div className="d-flex row-wrap">
                  <div className="card w-100 m-3">
                    <div className="container">
                      <div className="row">
                        <div className="col-6">
                          <div className="row">
                            <LazyLoadImage
                              src={character.node.image.large}
                              alt="img-profile"
                              className="mr-1 profil-chara"
                              effect="blur"
                              width="60"
                              height="80"
                            />
                            <div className="d-flex justify-content-between flex-column pt-1 pb-1">
                              <span className="chara-name">
                                {character.node.name.full}
                              </span>
                              <span className="chara-role">
                                {character.role}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="row justify-content-end text-right">
                            <div className="d-flex justify-content-between flex-column pt-1 pb-1">
                              <span className="voice-name">
                                {character.voiceActors[0] &&
                                  character.voiceActors[0].name.full}
                              </span>
                              <span className="voice-lang">
                                {character.voiceActors[0] &&
                                  character.voiceActors[0].language}
                              </span>
                            </div>
                            <LazyLoadImage
                              src={
                                character.voiceActors[0] &&
                                character.voiceActors[0].image.large
                              }
                              alt="img-profile"
                              width="60"
                              height="80"
                              className="ml-1 profil-voice"
                              effect="blur"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

Character.prototype = {
  char: propTypes.array,
};

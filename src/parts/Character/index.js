import React from "react";
import "./Character.scss";
import propTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function Character({ data }) {
  return (
    <div>
      <section className="character">
        <div className="container">
          <h4>Characters</h4>
          <div className="row">
            {data.map((character, index) => (
              <div className="col-md-6" key={`${index}-card`}>
                <div className="d-flex row-wrap">
                  <div className="card w-100 m-3">
                    <div className="container">
                      <div className="row">
                        <div className="col-6">
                          <div className="row">
                            <LazyLoadImage
                              src={character.image_url}
                              alt="img-profile"
                              className="mr-1 profil-chara"
                              effect="blur"
                              width="60"
                              height="80"
                            />
                            <div className="d-flex justify-content-between flex-column pt-1 pb-1">
                              <span className="chara-name">
                                {character.name}
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
                                {character.voice_actors.length > 0
                                  ? character.voice_actors[0].name
                                  : "Undifined"}
                              </span>
                              <span className="voice-lang">
                                {character.voice_actors.length > 0
                                  ? character.voice_actors[0].language
                                  : "Undifined"}
                              </span>
                            </div>
                            <LazyLoadImage
                              src={
                                character.voice_actors.length > 0
                                  ? character.voice_actors[0].image_url.replace(
                                      "/r/42x62/",
                                      "/"
                                    )
                                  : "https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c"
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

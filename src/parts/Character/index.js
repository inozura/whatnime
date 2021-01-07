import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Character.scss";
import propTypes from "prop-types";

export default function Character({ id }) {
  const [characterFetched, setCharacterFetched] = useState([]);
  const getCharacter = async () => {
    await axios({
      url: `https://api.jikan.moe/v3/anime/${id}/characters_staff`,
    }).then((res) => {
      setCharacterFetched(res);
    });
  };
  useEffect(() => {
    getCharacter();

    return () => {};
  }, []);
  console.log(characterFetched);

  return characterFetched ? (
    <p>loading..</p>
  ) : (
    <div>
      <section className="character">
        <div className="container">
          <h4>Character</h4>
          <div className="row">
            {characterFetched.characters.map((character) => (
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6">
                    <div className="card">
                      <div className="row">
                        <div className="col-6">
                          <div className="row">
                            <img
                              src={character.img_url}
                              alt="img-profile"
                              width="60"
                            />
                            <div className="d-flex justify-content-between flex-column">
                              <span>{character.name}</span>
                              <span>{character.role}</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="row align-items-end">
                            <div className="d-flex justify-content-between flex-column">
                              <span>{character.voice_actors[0].name}</span>
                              <span>{character.voice_actors[0].language}</span>
                            </div>
                            <img
                              src={character.voice_actors[0].image_url}
                              alt="img-profile"
                              width="60"
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
  id: propTypes.number,
};

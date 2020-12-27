import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";

import Back from "../../components/ButtonBack";
import Footer from "../../parts/Footer";
import "./About.scss";

export default function About() {
  useEffect(() => {
    document.title = "About";
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
                    <img
                      className="main-img"
                      src="https://images3.alphacoders.com/136/thumb-1920-136595.jpg"
                      alt="mainimg"
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
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nihil beatae modi in odio nesciunt placeat ipsam est officiis
                  dolor sed, hic ut necessitatibus consectetur laboriosam maxime
                  voluptatibus tempore incidunt deleniti? Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Quidem alias ea eveniet
                  nulla explicabo omnis saepe fugiat voluptatum perspiciatis
                  voluptas non praesentium, culpa iusto doloremque tempora
                  quaerat excepturi? Tempora ipsa porro natus nihil fuga tempore
                  possimus perferendis saepe veniam dolorem harum, quia
                  reiciendis officia vitae animi eius consequuntur ex! Sint
                  cumque ad veritatis illo illum. Qui aspernatur labore mollitia
                  odit doloribus fugit quia atque deserunt impedit obcaecati,
                  cumque tempora ipsum nihil libero culpa eaque delectus aliquam
                  quos provident sint? Culpa ullam veniam repudiandae eum hic
                  veritatis earum accusantium, ab quibusdam deleniti sint fuga
                  quam quisquam corrupti odio laborum enim. Consequatur, nulla
                  veritatis necessitatibus tenetur eum nostrum sapiente,
                  officiis debitis perferendis ipsa nisi at ratione. Quo
                  provident, corporis rerum non corrupti mollitia tempore.
                  Asperiores non necessitatibus nesciunt, voluptatibus
                  consequatur quas eligendi consequuntur dolores eaque in minus
                  animi aspernatur quibusdam eos perspiciatis, est alias. Ad
                  tenetur maiores rerum eum fugiat ab vel quae aut illum! Ullam
                  quibusdam dolores obcaecati id non in suscipit? Harum
                  blanditiis dicta reprehenderit, eum at, cupiditate earum ut
                  atque ex nobis cumque maiores molestias rerum consequatur
                  doloremque aliquid commodi qui rem dolorum sint? Unde, ea
                  provident. Quia natus aut amet officiis incidunt pariatur quos
                  laudantium fuga neque vero? Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Vel cupiditate, maxime, soluta
                  odit ipsam in iure incidunt consectetur reprehenderit,
                  aspernatur dicta repudiandae. Magnam iste, fuga distinctio
                  nemo aut, error, nesciunt nobis deleniti maxime corporis
                  earum. Harum necessitatibus provident ut nisi corporis cum
                  iusto, porro sit quas dolorem, illum at ratione deserunt atque
                  sunt cupiditate omnis quo impedit itaque laudantium unde ab
                  repellendus cumque. Nobis vero accusantium quae a ad.
                  Doloribus porro obcaecati, beatae consequuntur sapiente fugit
                  corrupti, ratione aspernatur magni molestias, dicta labore.
                  In, esse nemo! Ipsam vitae voluptatibus, tempore, veniam
                  excepturi quisquam maxime veritatis velit nemo dolorem earum
                  recusandae iusto suscipit doloribus. Culpa delectus incidunt
                  libero recusandae, sapiente eius nemo magnam error voluptatum.
                  Alias illo vero placeat voluptatibus veniam est, sunt dolore
                  ex quo ab nemo deserunt eum animi reprehenderit tenetur quae
                  minima, molestiae exercitationem. Harum dolorum ex minus quae,
                  aliquam minima modi id enim consectetur hic possimus eum
                  repellendus sequi iusto dolores. Facilis, deserunt? Deleniti
                  atque aliquam libero aliquid pariatur voluptate eum odio,
                  aspernatur et a perspiciatis iusto. Ipsa esse maxime odio
                  culpa quisquam. Cumque iure itaque esse ab cum nostrum quasi
                  provident officia. Ex incidunt tempore illum. Distinctio natus
                  cum fuga tempora voluptate tempore sapiente esse corrupti
                  perspiciatis quos veritatis nostrum molestiae quis possimus
                  nihil aliquam minus id architecto, dolorem quia sed eaque
                  culpa totam! Quaerat fugit necessitatibus ad rem sequi magni
                  enim consectetur ipsa adipisci aperiam quo vitae, assumenda
                  dolor hic vel placeat totam iste harum facilis corrupti
                  consequuntur nihil laborum? Officiis ipsum repudiandae,
                  architecto neque non rerum, cumque libero reprehenderit quas
                  at placeat quidem ipsa? Voluptatum libero ipsum quod fuga
                  aliquam consequatur repellendus rerum totam enim sapiente ad,
                  magni reprehenderit. Facere, perspiciatis! Sit unde omnis
                  voluptatibus rem mollitia modi veniam fugiat consequuntur aut
                  perspiciatis consequatur quia odio sunt eveniet, itaque illum
                  excepturi consectetur magni ipsam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

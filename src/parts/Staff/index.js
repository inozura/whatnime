import React from "react";
import propTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import "./Staff.scss";

export default function Staff({ data }) {
  return (
    <div>
      <section className="staff">
        <div className="container">
          <h4>Staff Production</h4>
          <div className="row">
            {data.map((staff, index) => (
              <div className="col-md-6 p-3" key={`${index}-card`}>
                <div className="card">
                  <div className="d-flex flex-row">
                    <LazyLoadImage
                      src={staff.image_url}
                      alt={`${index}-img-staff`}
                      className="mr-2 profil-staff"
                      width="52"
                      height="70"
                      effect="blur"
                    />
                    <div className="d-flex flex-column justify-content-between pt-1 pb-1">
                      <span className="staff-name">{staff.name}</span>
                      <span className="staff-role">
                        {staff.positions && staff.positions[0]}
                      </span>
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

Staff.prototype = {
  staffFetched: propTypes.array,
};

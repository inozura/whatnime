import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "./404.scss";

export default function NotFound() {
  useEffect(() => {
    document.title = "Not Found";
  });

  return (
    <div className="pagenotfound">
      <div className="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>Oops!</h1>
          </div>
          <h2>404 - Page not found</h2>
          <p>
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable.
          </p>
          <Link className="button-not-found" to="/">
            Go To Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}

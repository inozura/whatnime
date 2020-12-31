import React, { useState } from "react";

import Dialog from "../../components/Dialog";
import "./Search.scss";

export default function Search() {
  const [urlValue, setUrlValue] = useState("");
  const [loadDialog, setLoadDialog] = useState(false);

  const showDialog = (bool) => {
    setLoadDialog(bool);
  };

  return (
    <section className="search">
      <div className="bg-overlay"></div>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <input
            type="text"
            name="url"
            onChange={(e) => setUrlValue(e.target.value)}
            placeholder="Paste URL in Here"
          />
          <input type="submit" value="Go" onClick={() => setLoadDialog(true)} autoComplete="none" />
        </div>
      </div>
      {loadDialog ? <Dialog showDialog={showDialog} data={urlValue} /> : null}
    </section>
  );
}

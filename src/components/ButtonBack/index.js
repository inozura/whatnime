import React from "react";
import { useHistory } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import "./ButtonBack.scss";

export default function ButtonBack({ className }) {
  const history = useHistory();

  return (
    <div className={`back-button ${className}`}>
      <IconButton onClick={() => history.goBack()}>
        <ArrowBackIcon color="primary" />
      </IconButton>
    </div>
  );
}

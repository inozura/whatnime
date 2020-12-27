import React, { useState } from "react";
import { DropzoneArea } from "material-ui-dropzone";
import Dialog from "../Dialog";
import "./Dropfile.scss";

export default function Dropfile() {
  const [dataImg, setDataImg] = useState([]);
  const [loadDialog, setLoadDialog] = useState(false);

  const showDialog = (bool) => {
    setLoadDialog(bool);
  };

  const handleChange = (files) => {
    setDataImg(files);
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = function () {
      setDataImg(reader.result);
      setLoadDialog(true);
    };
  };

  return (
    <div className="dropzone">
      <DropzoneArea
        dropzoneText={"Drag and drop image here or click"}
        onDrop={(files) => handleChange(files)}
        filesLimit={1}
        maxFileSize={5000000}
        showAlerts={["error"]}
        acceptedFiles={["image/jpeg", "image/png", "image/bmp", "image/jpg"]}
      />
      {loadDialog ? (
        <Dialog data={dataImg} showDialog={showDialog} isUrl={true} />
      ) : null}
    </div>
  );
}

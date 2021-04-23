import "./gallery.scss";
import ReactPlayer from "react-player";
import { useState, useEffect } from "react";

const Gallery = (props) => {
  const config = {
    attributes: {
      disablePictureInPicture: true,
      controlsList: "nodownload",
    },
  };

  return props.type == "videos" ? (
    <div className={`${props.className}` + " mt-5"}>
      {props.pictures.map((pic) => (
        <ReactPlayer
          url={pic.video}
          width="100%"
          height="500px"
          playing={true}
          controls
          config={config}
          light={pic.pic}
        />
      ))}
    </div>
  ) : (
    <div className={`${props.className}` + " mt-5"}>
      {props.pictures.map((pic) => (
        <div>
          <img src={pic} alt="poster" />
        </div>
      ))}
    </div>
  );
};

export default Gallery;

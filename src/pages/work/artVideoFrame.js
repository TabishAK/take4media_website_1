import v1 from "../../videos/1.mp4";
import v2 from "../../videos/2.mp4";
import v3 from "../../videos/3.mp4";
import v4 from "../../videos/4.mp4";
import v5 from "../../videos/5.mp4";
import v6 from "../../videos/6.mp4";
import v7 from "../../videos/7.mp4";
import v8 from "../../videos/8.mp4";
import v9 from "../../videos/9.mp4";

import i1 from "../../images/thumbnail/1.jpg";
import i2 from "../../images/thumbnail/2.jpg";
import i3 from "../../images/thumbnail/3.jpg";
import i4 from "../../images/thumbnail/4.jpg";
import i5 from "../../images/thumbnail/5.jpg";
import i6 from "../../images/thumbnail/6.jpg";
import i7 from "../../images/thumbnail/7.jpg";
import i8 from "../../images/thumbnail/8.jpg";
import i9 from "../../images/thumbnail/9.jpg";

import { useState, useEffect } from "react";
import Navbar from "./../../components/navbar/navbar";
import artVideoIcon from "../../images/logos_what_weDo/2.png";
import KiwiMaruHeadingWithLine from "./../../components/KiwiMaru-heading w/index";
import Pagination from "./../../components/pagination/pagination";
import Gallery from "./../../components/Gallery/gallery";
import Wobble from "react-reveal/Wobble";
const ArtVideoFrame = () => {
  const pictures = [
    { video: v2, pic: i2 },
    { video: v3, pic: i3 },
    { video: v4, pic: i4 },
    { video: v5, pic: i5 },
    { video: v6, pic: i6 },
    { video: v7, pic: i7 },
    { video: v8, pic: i8 },
    { video: v9, pic: i9 },
    { video: v1, pic: i1 },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage] = useState(8);

  const indexOfLastPicture = currentPage * imagesPerPage;
  const indexOfFirstPicture = indexOfLastPicture - imagesPerPage;
  const currentPictures = pictures.slice(
    indexOfFirstPicture,
    indexOfLastPicture
  );

  const paginate = (prev, curr) => {
    setCurrentPage(curr);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar color="black" />
      <Wobble>
        <img
          className="mt-5 mb-5 setWidth"
          src={artVideoIcon}
          alt="art-design"
        />
      </Wobble>
      <KiwiMaruHeadingWithLine heading="Work" line="line-2" width="25%" />
      <Pagination
        imagesPerPage={imagesPerPage}
        totalImages={pictures.length}
        paginate={paginate}
      />
      <Gallery
        type="videos"
        pictures={currentPictures}
        className="container video-gallery"
      />
    </>
  );
};

export default ArtVideoFrame;

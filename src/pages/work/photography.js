import Navbar from "../../components/navbar/navbar";
import KiwiMaruHeadingWithLine from "./../../components/KiwiMaru-heading w/index";
import Photography_icon from "../../images/logos_what_weDo/4.png";
import photo_1 from "../../images/photography/1.jpg";
import photo_2 from "../../images/photography/2.jpg";
import photo_3 from "../../images/photography/3.jpg";
import photo_4 from "../../images/photography/4.jpg";
import photo_5 from "../../images/photography/5.jpg";
import photo_6 from "../../images/photography/6.jpg";
import photo_7 from "../../images/photography/7.jpg";
import photo_8 from "../../images/photography/8.jpg";
import photo_9 from "../../images/photography/9.jpg";
import photo_10 from "../../images/photography/10.jpg";
import photo_11 from "../../images/photography/11.jpg";
import photo_12 from "../../images/photography/12.jpg";
import { useState } from "react";
import Gallery from "./../../components/Gallery/gallery";
import Pagination from "./../../components/pagination/pagination";
import FooterMenus from "../../components/footerMenus/footerMenus";
import Footer from "../../components/footer/footer";
import { useEffect } from "react";
import Wobble from "react-reveal/Wobble";

const Photography = () => {
  const pictures = [
    photo_1,
    photo_2,
    photo_3,
    photo_4,
    photo_5,
    photo_6,
    photo_7,
    photo_8,
    photo_9,
    photo_10,
    photo_11,
    photo_12,
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage] = useState(9);

  const indexOfLastPicture = currentPage * imagesPerPage;
  const indexOfFirstPicture = indexOfLastPicture - imagesPerPage;
  const currentPictures = pictures.slice(
    indexOfFirstPicture,
    indexOfLastPicture
  );

  const paginate = (prev, curr) => setCurrentPage(curr);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar color="black" />
      <Wobble>
        <img
          className="mt-5 mb-5 setWidth"
          src={Photography_icon}
          alt="art-design"
        />
      </Wobble>
      <KiwiMaruHeadingWithLine heading="Work" line="line-2" width="25%" />
      <Pagination
        imagesPerPage={imagesPerPage}
        totalImages={pictures.length}
        paginate={paginate}
      />
      <Gallery pictures={currentPictures} className="container photographs" />
      <FooterMenus />
      <Footer />
    </>
  );
};

export default Photography;

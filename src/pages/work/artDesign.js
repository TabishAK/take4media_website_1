import Navbar from "../../components/navbar/navbar";
import Art_Design from "../../images/logos_what_weDo/1.png";
import KiwiMaruHeadingWithLine from "./../../components/KiwiMaru-heading w/index";
import { useState, useEffect } from "react";
import poster_1 from "../../images/posters/Opt-1.jpg";
import poster_2 from "../../images/posters/Opt-2.jpg";
import poster_3 from "../../images/posters/Opt-3.jpg";
import poster_4 from "../../images/posters/Opt-4.jpg";
import poster_5 from "../../images/posters/Opt-5.jpg";
import poster_6 from "../../images/posters/Opt-6.jpg";
import poster_7 from "../../images/posters/Opt-7.jpg";
import poster_8 from "../../images/posters/Opt-8.jpg";
import poster_9 from "../../images/posters/Opt-9.jpg";
import poster_10 from "../../images/posters/Opt-10.jpg";
import poster_11 from "../../images/posters/Opt-11.jpg";
import poster_12 from "../../images/posters/Opt-12.jpg";
import poster_13 from "../../images/posters/Opt-13.jpg";
import poster_14 from "../../images/posters/Opt-14.jpg";
import poster_15 from "../../images/posters/Opt-15.jpg";
import poster_16 from "../../images/posters/Opt-16.jpg";
import poster_17 from "../../images/posters/Opt-17.jpg";
import poster_18 from "../../images/posters/Opt-18.jpg";
import poster_19 from "../../images/posters/Opt-19.jpg";
import Gallery from "../../components/Gallery/gallery";
import Pagination from "./../../components/pagination/pagination";
import FooterMenus from "./../../components/footerMenus/footerMenus";
import Footer from "./../../components/footer/footer";
import Wobble from "react-reveal/Wobble";

const ArtDesign = () => {
  const [pictures] = useState([
    poster_1,
    poster_2,
    poster_3,
    poster_4,
    poster_5,
    poster_6,
    poster_7,
    poster_8,
    poster_9,
    poster_10,
    poster_11,
    poster_12,
    poster_13,
    poster_14,
    poster_15,
    poster_16,
    poster_17,
    poster_18,
    poster_19,
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage] = useState(8);

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
        <img className="mt-5 mb-5 setWidth" src={Art_Design} alt="art-design" />
      </Wobble>
      <KiwiMaruHeadingWithLine heading="Work" line="line-2" width="25%" />
      <Pagination
        imagesPerPage={imagesPerPage}
        totalImages={pictures.length}
        paginate={paginate}
      />
      <Gallery pictures={currentPictures} className="posters" />
      <FooterMenus />
      <Footer />
    </>
  );
};

export default ArtDesign;

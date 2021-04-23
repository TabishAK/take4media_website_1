import Navbar from "../../components/navbar/navbar";
import SocialMediaLogo from "../../images/logos_what_weDo/3.png";
import KiwiMaruHeadingWithLine from "./../../components/KiwiMaru-heading w/index";
import image_1 from "../../images/socialMedia/1.jpg";
import image_2 from "../../images/socialMedia/2.jpg";
import image_3 from "../../images/socialMedia/3.jpg";
import image_4 from "../../images/socialMedia/4.jpg";
import image_5 from "../../images/socialMedia/5.jpg";
import image_6 from "../../images/socialMedia/6.jpg";
import image_7 from "../../images/socialMedia/7.jpg";
import image_8 from "../../images/socialMedia/8.jpg";
import image_9 from "../../images/socialMedia/9.jpg";
import image_10 from "../../images/socialMedia/10.jpg";
import image_11 from "../../images/socialMedia/11.jpg";
import image_12 from "../../images/socialMedia/12.jpg";
import "./style.scss";
import FooterMenus from "./../../components/footerMenus/footerMenus";
import Footer from "./../../components/footer/footer";
import { useEffect } from "react";
import Wobble from "react-reveal/Wobble";

const SocialMediaManaging = () => {
  const images = [
    image_1,
    image_2,
    image_3,
    image_4,
    image_5,
    image_6,
    image_7,
    image_8,
    image_9,
    image_10,
    image_11,
    image_12,
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar color="black" />
      <Wobble>
        <img
          className="mt-5 mb-5 setWidth"
          src={SocialMediaLogo}
          alt="art-design"
        />
      </Wobble>

      <KiwiMaruHeadingWithLine heading="Work" line="line-2" width="25%" />

      <div className="container social-media-images mt-5">
        {images.map((img) => (
          <div>
            <img src={img} alt="social-media-image" />
          </div>
        ))}
      </div>

      <FooterMenus />
      <Footer />
    </>
  );
};

export default SocialMediaManaging;

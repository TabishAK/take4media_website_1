import Navbar from "../../components/navbar/navbar";
import SocialMediaLogo from "../../images/logos_what_weDo/3.png";
import KiwiMaruHeadingWithLine from "./../../components/KiwiMaru-heading w/index";
const SocialMediaManaging = () => {
  return (
    <>
      <Navbar color="black" />
      <img
        className="mt-5 mb-5 setWidth"
        src={SocialMediaLogo}
        alt="art-design"
      />

      <KiwiMaruHeadingWithLine heading="Work" line="line-2" width="25%" />
    </>
  );
};

export default SocialMediaManaging;

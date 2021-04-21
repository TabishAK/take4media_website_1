import Navbar from "../../components/navbar/navbar";
import KiwiMaruHeadingWithLine from "./../../components/KiwiMaru-heading w/index";
import Photography_icon from "../../images/logos_what_weDo/4.png";
const Photography = () => {
  return (
    <>
      <Navbar color="black" />
      <img
        className="mt-5 mb-5 setWidth"
        src={Photography_icon}
        alt="art-design"
      />
      <KiwiMaruHeadingWithLine heading="Work" line="line-2" width="25%" />
    </>
  );
};

export default Photography;

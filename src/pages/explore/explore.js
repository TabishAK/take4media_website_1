import Navbar from "./../../components/navbar/navbar";
import "../../../node_modules/video-react/dist/video-react.css";
import "./explore.scss";
import WhatIsTake4Meda from "../../components/whatIsTake4media/wi_take4media";
import { Player } from "video-react";
import FooterMenus from "../../components/footerMenus/footerMenus";
import Footer from "../../components/footer/footer";
import haha from "../../images/header-background/3.jpg";

const Explore = () => {
  return (
    <>
      <div className="explore">
        <div className="header-background-explore same">
          <Navbar />
        </div>
        <WhatIsTake4Meda isShow={true} />

        <div className="video">
          <Player
            playsInline
            fluid={false}
            width={600}
            height={400}
            poster={haha}
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          />
        </div>

        <WhatIsTake4Meda isShow={false} />

        <FooterMenus />
        <Footer />
      </div>
    </>
  );
};

export default Explore;

import HiringCard from "../../components/hiringCard/hiringCard";

import Zoom from "react-reveal/Zoom";
const HiringCardPanel = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-6">
          <Zoom left>
            <HiringCard />
          </Zoom>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <Zoom>
            <HiringCard />
          </Zoom>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <Zoom right>
            <HiringCard />
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default HiringCardPanel;

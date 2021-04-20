import HiringCard from "../../components/hiringCard/hiringCard";
const HiringCardPanel = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-6">
          <HiringCard />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <HiringCard />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <HiringCard />
        </div>
      </div>
    </div>
  );
};

export default HiringCardPanel;

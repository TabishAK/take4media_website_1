import Line_1 from "../../images/vectors/Line-1.png";
import Line_2 from "../../images/vectors/Line-2.png";

const KiwiMaruHeadingWithLine = (props) => {
  return (
    <>
      <h3 className="theme-heading">{props.heading}</h3>
      <img
        src={props.line == "line-1" ? Line_1 : Line_2}
        style={{
          width: props.width,
          height: "25px",
        }}
        alt="theme-vector"
      />
    </>
  );
};

export default KiwiMaruHeadingWithLine;

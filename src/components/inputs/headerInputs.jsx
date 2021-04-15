import SimpleAutoComplete from "../../components/inputs/simple_auto_complete";
import { GoLocation } from "react-icons/go";
import { BiDownArrowAlt } from "react-icons/bi";

const HeaderInputs = () => {
  return (
    <div className="flex-container">
      <div>
        <SimpleAutoComplete label="What would you like to find?" />
      </div>
      <div>
        <SimpleAutoComplete
          label="What would you like to find?"
          icon={
            <GoLocation
              style={{
                left: "235",
                color: "rgb(202, 104, 37)",
                position: "relative",
                width: "24px",
                marginTop: "-6",
              }}
            />
          }
        />
      </div>
      <div>
        <SimpleAutoComplete
          label="What would you like to find?"
          icon={
            <BiDownArrowAlt
              style={{
                left: "235",
                color: "rgb(202, 104, 37)",
                position: "relative",
                width: "24px",
                marginTop: "-6",
              }}
            />
          }
        />
      </div>
    </div>
  );
};

export default HeaderInputs;

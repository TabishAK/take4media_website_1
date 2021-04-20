import "./form.scss";

const Form = () => {
  return (
    <div className="container" style={{ marginBottom: "8%" }}>
      <div className="flex-form">
        <div className="left-form">
          <input
            className="mr-3 mb-3"
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          />
          <input
            className="mr-3 mb-3"
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          />
          <input
            className="mr-3 mb-3"
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          />
        </div>
        <div className="right-form">
          <textarea
            id="w3review"
            name="w3review"
            rows="4"
            cols="50"
            placeholder="Message"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Form;

import Navbar from "../../components/navbar/navbar";
import WorkingDetails from "../../components/workingDetails/workingDetails";
import Line from "../../images/vectors/Line-1.png";
import "./contactUs.scss";
import Form from "./../../components/Form/form";
import Footer from "../../components/footer/footer";
import FooterMenus from "../../components/footerMenus/footerMenus";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <Navbar color="black" />

      <h3 style={{ marginTop: "5%" }} className="theme-heading">
        Contact Us
      </h3>
      <img
        src={Line}
        alt="theme-vector"
        style={{
          height: "12px",
          width: "24%",
          marginTop: "-5px",
          marginBottom: "3%",
        }}
      />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.0895268010427!2d67.06347361530702!3d24.79238775408759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33cebc04eb153%3A0x7e2ded11148c9f9!2sTake4Media!5e0!3m2!1sen!2s!4v1618888467320!5m2!1sen!2s"
        style={{ border: 0, height: "30rem", width: "90%" }}
        allowfullscreen=""
        loading="lazy"
      ></iframe>

      <WorkingDetails />

      <h3 className="mb-5 theme-heading">Get in Touch With Us</h3>
      <Form />
      <FooterMenus />
      <Footer />
    </div>
  );
};

export default ContactUs;

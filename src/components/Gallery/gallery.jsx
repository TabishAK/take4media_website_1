import "./gallery.scss";
const Gallery = ({ pictures }) => {
  return (
    <div className="posters mt-5 ">
      {pictures.map((pic) => (
        <div className="mr-4 mb-4 ml-4">
          <img style={{ height: "245px" }} src={pic} alt="poster" />
        </div>
      ))}
    </div>
  );
};

export default Gallery;

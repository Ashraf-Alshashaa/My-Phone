import React from "react";

const Img = ({ src, onClick }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%",
        backgroundPosition: "center center",
      }}
      className="Img-component"
      onClick={onClick}
    ></div>
  );
};

export default Img;

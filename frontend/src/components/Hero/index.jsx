import React from "react";
import "./style.css";

const Hero = ({ children }) => {
  return (
    <div>
      <div className="hero-container">
        <img
          src={
            "https://res.cloudinary.com/dpci3gfrc/image/upload/v1685914513/My-Phone/hero-mobile_gur6kg.png"
          }
          className={"hero-mobile"}
          alt={"hero-mobile"}
        />
        <img
          src={
            "https://res.cloudinary.com/dpci3gfrc/image/upload/v1685926332/My-Phone/hero-img-1_bwhhz0.png"
          }
          className={"hero-background"}
          alt={"hero-background"}
        />
        <div className="hero-info">
          <h2 className="hero-title">
            UNLEASH <br />
            KNOWLEDGE!
          </h2>
          <span className="hero-text">
            Unleash Boundless Potential with Mobile Technology's Limitless Power
          </span>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import "./style.css";

const Hero = () => {
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
          <div className="hero-text">UNLEASH LIMITLESS INFORMATION!</div>
          <div className="brands-selector-container">
            <span className="selector-title">Select Your Brand</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

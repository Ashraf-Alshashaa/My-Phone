import React, { useState, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Header = ({ children }) => {
  const [visibility, setVisibility] = useState(false);
  const screenSize = window.innerWidth;

  useEffect(() => {
    const handleVisibility = (e) =>
      e.target.className !== "fa-solid fa-bars nav-list-btn" &&
      setVisibility(false);
    window.addEventListener("click", (e) => handleVisibility(e));
    return () => {
      window.removeEventListener("click", handleVisibility);
    };
  }, [visibility]);

  return (
    <header>
      <div className="logo-container">
        <div className="img-logo-container">
          <img
            className="logo-icon"
            src="https://res.cloudinary.com/dpci3gfrc/image/upload/v1686098888/My-Phone/my-phone-logo_phhdnc.png"
            alt="logo-icon"
          />
        </div>
        <h2 className="logo-text">MY PHONE</h2>
      </div>
      <ul className={`nav-container  ${visibility && "background"}`}>
        {screenSize < 800 && (
          <i
            className="fa-solid fa-bars nav-list-btn"
            onClick={(e) => {
              setVisibility(!visibility);
            }}
          ></i>
        )}
        <Link className={`nav-item visible-${visibility}`} to={"/"}>
          Home
        </Link>
        <Link className={`nav-item visible-${visibility}`} to={"/brands"}>
          Brands
        </Link>
        <Link className={`nav-item visible-${visibility}`} to={"/compering"}>
          Compering
        </Link>
        <Link className={`nav-item visible-${visibility}`} to={"/about-us"}>
          About Us
        </Link>
      </ul>
      {screenSize > 800 && <div className="search-box">{children}</div>}
    </header>
  );
};

export default Header;

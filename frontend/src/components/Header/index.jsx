import React, { useState, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Img from "../../components/Img";

const Header = ({ children }) => {
  const [visibility, setVisibility] = useState(false);
  const [searchStr, setSearchStr] = useState("");
  const [mobiles, setMobiles] = useState([]);

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

  const { performFetch: fetchMobiles } = useFetch("/search/", (data) =>
    setMobiles(data?.result)
  );

  const handleSearch = () => {
    if (searchStr.trim() !== "") {
      fetchMobiles({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          search_str: searchStr,
        }),
      });
    }
  };

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
      <div className="search-cont">
        <div className="input-cont">
          <input
            className="search-input"
            value={searchStr}
            type="text"
            onChange={(e) => setSearchStr(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
          />
          <button className="search-btn" onClick={handleSearch}>
            search
          </button>
          <ul className="search-result-cont">
            {mobiles?.map((mobile) => (
              <Link
                key={mobile._id}
                to={`/mobile`}
                state={mobile}
                className="search-item"
              >
                <div className="search-item-img">
                  <Img src={mobile.images[0]} />
                </div>
                <p className="search-item-name"></p>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

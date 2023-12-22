import React, { useState, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import extractNameInfo from "../../hooks/extract-name-info";
import Img from "../../components/Img";

const Header = () => {
  const [searchStr, setSearchStr] = useState("");
  const [mobiles, setMobiles] = useState([]);

  useEffect(() => {
    const handleVisibility = (e) => {
      if (
        e.target.className !== "search-input" &&
        e.target.className !== "material-symbols-outlined search-btn"
      ) {
        setSearchStr("");
        setMobiles([]);
      }
    };
    window.addEventListener("click", (e) => handleVisibility(e));
    return () => {
      window.removeEventListener("click", handleVisibility);
    };
  }, []);

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
      <div className="search-cont">
        <div className="input-cont">
          <input
            className="search-input"
            value={searchStr}
            placeholder="Search for a mobile"
            type="text"
            onChange={(e) => setSearchStr(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
          />
          <span
            className="material-symbols-outlined search-btn"
            onClick={handleSearch}
          >
            search
          </span>
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
                <div className="search-item-text-cont">
                  <p className="search-item-name">
                    {extractNameInfo(mobile.name).name}
                  </p>
                  <p className="search-item-info">
                    {extractNameInfo(mobile.name).info}
                  </p>
                </div>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <Link className={`nav-item`} to={"/about-us"}>
        About Us
      </Link>
    </header>
  );
};

export default Header;

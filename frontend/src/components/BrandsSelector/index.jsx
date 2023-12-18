import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const BrandsSelector = ({ brands }) => {
  const [selectedBrand, setSelectedBrand] = useState("Select Brand");
  const [visibility, setVisibility] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleVisibility = (e) =>
      e.target.className !== "brands-selector-show-btn" && setVisibility(false);
    window.addEventListener("click", (e) => handleVisibility(e));
    return () => {
      window.removeEventListener("click", handleVisibility);
    };
  }, [visibility]);

  const handelClick = (selectedBrand) => {
    selectedBrand !== "Select Brand"
      ? navigate(`/brand-page/${selectedBrand}`, {
          state: selectedBrand,
        })
      : // todo replace alert with popup msg
        alert("Please select a brand");
  };

  return (
    <div className="brands-selector-container">
      <div className="brands-selector">
        <button
          className="brands-selector-show-btn"
          onClick={() => setVisibility(!visibility)}
        >
          <i className="fa-solid fa-circle-down selector-icon"></i>
          {selectedBrand !== "Select Brand"
            ? selectedBrand.toUpperCase()
            : selectedBrand}
        </button>
        <ul className={`brands-list-visible-${visibility}`}>
          {brands?.map((brand) => (
            <li
              value={brand}
              key={brand}
              className="brand-item"
              onClick={() => {
                window.innerWidth < 600
                  ? handelClick(brand)
                  : setSelectedBrand(brand);
              }}
            >
              {brand.toUpperCase()}
            </li>
          ))}
        </ul>
      </div>
      <button
        className="brands-selector-sub-btn"
        onClick={() => handelClick(selectedBrand)}
      >
        <i className="fa-solid fa-circle-check selector-icon"></i> Let's Go
      </button>
    </div>
  );
};

export default BrandsSelector;

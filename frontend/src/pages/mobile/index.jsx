import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Img from "../../components/Img";
import "./style.css";

const Mobile = () => {
  const { state } = useLocation();
  const { _id, name, specifications, images, ...detailsSummary } = state;
  const [viewedImg, setViewedImg] = useState(images[0]);

  return (
    <main className="mobile-page-container">
      <h2 className="mobile-page-title">{name}</h2>
      <div className="mobile-summary-cont">
        <div className="view-images">
          <div className="all-images">
            {images.map((img, idx) => (
              <div key={img + idx} className="all-images-img">
                <Img src={img} onClick={() => setViewedImg(img)} />
              </div>
            ))}
          </div>
          <div className="viewed-img-container">
            <Img src={viewedImg} />
          </div>
        </div>
        <div className="mobile-details-summary">
          <h3 className="mobile-details-title">Summary</h3>
          {Object.entries(detailsSummary).map(([key, val]) => (
            <div key={key} className="summary-item">
              <p className="detail-name"> {key} :</p>
              <span className="detail-info">
                {key === "price" && "$ "}
                {val ? val : "Not Found"}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="specifications-cont">
        <h3 className="specifications-title">Specifications</h3>
        {Object.entries(specifications).map(([key, val]) => (
          <div key={key} className="specification-item-cont">
            <h4 className="specification-name"> {key} :</h4>
            <div className="specification-info">
              {val.map((specification) => {
                return Object.entries(specification).map(([key, val]) => (
                  <div key={key} className="specification-item">
                    <p className="specification-key">{key}:</p>
                    <span className="specification-val">
                      {val ? val : "Not Found"}
                    </span>
                  </div>
                ));
              })}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Mobile;

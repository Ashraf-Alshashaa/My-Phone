import React from "react";

import "./style.css";

const Loading = () => {
  return (
    <main className="Loading-page-container">
      <h1 className="loading-page-title">LOADING..</h1>
      <img
        className="loader-img"
        src="https://res.cloudinary.com/dpci3gfrc/image/upload/v1686098888/My-Phone/my-phone-logo_phhdnc.png"
        alt="logo-icon"
      />
      <div className="loader"></div>
    </main>
  );
};

export default Loading;

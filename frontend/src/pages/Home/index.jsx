import React, { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import BrandsSelector from "../../components/BrandsSelector";
import AppleLogo from "./icons/Apple.png";
import SamsungLogo from "./icons/Samsung.png";
import XiaomiLogo from "./icons/Xiaomi.png";
import HuaweiLogo from "./icons/Huawei.png";
import "./style.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [brands, setBrands] = useState([]);

  const { performFetch: fetchBrands, isLoading: isLoadingBrands } = useFetch(
    `/collections-names`,
    (data) => setBrands(data?.result)
  );

  const isLoading = isLoadingBrands;

  useEffect(() => {
    fetchBrands({
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (isLoading) return <div>is loading</div>;
  return (
    <main className="home-page-container">
      <Header />
      <Hero>
        <BrandsSelector brands={brands} />
      </Hero>
      <div className="brands-btn-section">
        <Link to={"/brand-page/apple"} className="brand-btn">
          <div className="brand-logo-container">
            <img className="brand-logo" src={AppleLogo} alt="Apple Logo" />
          </div>
          <p className="brand-title">Apple</p>
        </Link>
        <Link to={"/brand-page/samsung"} className="brand-btn">
          <div className="brand-logo-container">
            <img className="brand-logo" src={SamsungLogo} alt="Samsung Logo" />
          </div>
          <p className="brand-title">Samsung</p>
        </Link>
        <Link to={"/brand-page/huawei"} className="brand-btn">
          <div className="brand-logo-container">
            <img className="brand-logo" src={HuaweiLogo} alt="Huawei Logo" />
          </div>
          <p className="brand-title">Huawei</p>
        </Link>
        <Link to={"/brand-page/mi"} className="brand-btn">
          <div className="brand-logo-container">
            <img className="brand-logo" src={XiaomiLogo} alt="Xiaomi Logo" />
          </div>
          <p className="brand-title">MI</p>
        </Link>
      </div>
    </main>
  );
};

export default Home;

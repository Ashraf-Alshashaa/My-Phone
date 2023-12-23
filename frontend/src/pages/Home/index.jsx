import React, { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import extractNameInfo from "../../hooks/extract-name-info";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import BrandsSelector from "../../components/BrandsSelector";
import AppleLogo from "./icons/Apple.png";
import SamsungLogo from "./icons/Samsung.png";
import XiaomiLogo from "./icons/Xiaomi.png";
import HuaweiLogo from "./icons/Huawei.png";
import Loading from "../loading";
import "./style.css";
import { Link } from "react-router-dom";
import Img from "../../components/Img";

const Home = () => {
  const [brands, setBrands] = useState([]);
  const [bestMobiles, setBestMobiles] = useState([]);

  const { performFetch: fetchBrands, isLoading: isLoadingBrands } = useFetch(
    `/collections-names`,
    (data) => setBrands(data?.result)
  );

  const { performFetch: fetchBestMobile, isLoading: isLoadingBestMobile } =
    useFetch(`/best-mobiles/`, (data) => setBestMobiles(data?.result));

  const bestBrands = [
    {
      path: "/brand-page/apple",
      logo: AppleLogo,
      name: "Apple",
    },
    {
      path: "/brand-page/samsung",
      logo: SamsungLogo,
      name: "Samsung",
    },
    {
      path: "/brand-page/huawei",
      logo: HuaweiLogo,
      name: "Huawei",
    },
    {
      path: "/brand-page/mi",
      logo: XiaomiLogo,
      name: "MI",
    },
  ];

  const isLoading = isLoadingBrands && isLoadingBestMobile;

  useEffect(() => {
    fetchBrands({
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
    fetchBestMobile({
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (isLoading) return <Loading />;
  if (brands[1])
    return (
      <main className="home-page-container">
        <Header />
        <Hero>
          <BrandsSelector brands={brands} />
        </Hero>
        <div className="brands-btn-section">
          {bestBrands.map(({ path, logo, name }) => (
            <Link to={path} className="brand-btn">
              <div className="brand-logo-container">
                <img className="brand-logo" src={logo} alt="Apple Logo" />
              </div>
              <p className="brand-title">{name}</p>
            </Link>
          ))}
        </div>
        <h1 className="section-title">Best Mobiles</h1>
        <div className="best-mobiles-section">
          {bestMobiles.map((mobile) => (
            <Link to={"/mobile"} state={mobile} className="best-mobile">
              <p className="best-mobile-title" key={mobile._id}>
                {extractNameInfo(mobile.name).name}
              </p>
              <div className="best-mobile-img">
                <Img src={mobile.images[0]} />
              </div>
            </Link>
          ))}
        </div>
      </main>
    );
};

export default Home;

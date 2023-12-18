import React, { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
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

const Home = () => {
  const [brands, setBrands] = useState([]);

  const { performFetch: fetchBrands, isLoading: isLoadingBrands } = useFetch(
    `/collections-names`,
    (data) => setBrands(data?.result)
  );

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
      </main>
    );
};

export default Home;

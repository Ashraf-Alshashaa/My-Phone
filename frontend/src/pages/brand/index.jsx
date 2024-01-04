import React, { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import "./style.css";
import { Link, useParams } from "react-router-dom";
import Loading from "../loading";
import extractNameInfo from "../../hooks/extract-name-info";
import Img from "../../components/Img";

const Brand = () => {
  const [brands, setBrands] = useState([]);
  const { brand } = useParams();

  const { performFetch: fetchBrand, isLoading: isLoadingBrands } = useFetch(
    `/brand/?brand=${brand}`,
    (data) => setBrands(data?.result)
  );

  const isLoading = isLoadingBrands;

  useEffect(() => {
    fetchBrand({
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) return <Loading />;
  return (
    <main className="brand-page-container">
      <h1 className="brant-page-title">{brand?.toUpperCase()}</h1>
      <div className="mobile-cards">
        {brands.map((mobile) => {
          const { _id, name, images, price } = mobile;
          return (
            <Link
              key={_id}
              state={mobile}
              to={`/mobile`}
              className="mobile-card"
            >
              <div className="mobile-img">
                <Img src={images[0]} />
              </div>
              <div className="mobile-text-container">
                <h3 className="mobile-name">{extractNameInfo(name).name}</h3>
                <p>
                  <span>Color:</span>
                  {extractNameInfo(name).info.split(",")[0]}
                </p>
                <p>
                  <span>Storage:</span>
                  {extractNameInfo(name).info.split(",")[1]}
                </p>
                <p>
                  <span>Price:</span>
                  {`$ ${price}`}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default Brand;

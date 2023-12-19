import React, { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import "./style.css";
import { Link, useParams } from "react-router-dom";
import Loading from "../loading";

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

  const accessNameAndDetails = (inputString) => {
    const regex = /^(.*?)\s*\((.*?)\)$/;
    const matchResult = regex.exec(inputString);
    if (matchResult) {
      return {
        name: matchResult[1],
      };
    } else {
      return {
        name: inputString,
      };
    }
  };

  if (isLoading) return <Loading />;
  return (
    <main className="brand-page-container">
      <h1 className="brant-page-title">{brand?.toUpperCase()}</h1>
      <div className="mobile-cards">
        {brands.map((mobile) => {
          const { _id, name, images } = mobile;
          return (
            <div key={_id} className="mobile-card">
              <h3 className="mobile-name">
                {accessNameAndDetails(name)?.name}
              </h3>
              <div className="mobile-img-cont">
                <img className="mobile-img" src={images[0]} alt={name} />
              </div>
              <Link className="show-details" state={mobile} to={`/mobile`}>
                Show Details
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Brand;

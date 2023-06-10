import React, { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import BrandsSelector from "../../components/BrandsSelector";
import "./style.css";

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
    </main>
  );
};

export default Home;

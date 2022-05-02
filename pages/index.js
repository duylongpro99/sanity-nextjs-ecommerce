import React from "react";

import { Banner, FooterBannber } from "../components";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="products-heading"></div>
      <div className="products-container"></div>
      <FooterBannber />
    </div>
  );
};

export default Home;


import React from "react";

import { Banner, FooterBannber, Product } from "../components";
import { client } from "../lib/client";

const Home = ({ products, banners }) => {
  return (
    <div>
      <Banner banner={banners && banners[0]} />
      <div className="products-heading"></div>
      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} data={product} />
        ))}
      </div>
      <FooterBannber data={banners && banners[0]} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  const bannerQuery = '*[_type == "banner"]';
  const banners = await client.fetch(bannerQuery);
  console.log(banners);
  return {
    props: { products, banners },
  };
};

export default Home;


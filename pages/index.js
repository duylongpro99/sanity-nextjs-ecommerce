import React from "react";
import { Product } from "../components";
import { client } from "../lib/client";

const Home = ({ products }) => {
  return (
    <div className="flex">
      <div className="side-bar-container"></div>
      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} data={product} />
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  return {
    props: { products },
  };
};

export default Home;


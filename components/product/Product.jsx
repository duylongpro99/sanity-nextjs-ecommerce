import Link from "next/link";
import React from "react";
import { urlFor } from "../../lib/client";

const Product = ({ data: { image, name, slug, price, details } }) => {
  return (
    <div>
      <Link href={`/product/${slug}`}>
        <div className="product-card">
          <img
            src={urlFor(image && image[0])}
            alt=""
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;


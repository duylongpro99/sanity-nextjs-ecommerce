import Link from "next/link";
import React from "react";
import { urlFor } from "../../lib/client";

const Banner = ({ banner }) => {
  return (
    <div className="banner-container">
      <div>
        <p className="beats-solo">{banner?.smallText}</p>
        <h3>{banner?.midText}</h3>
        <h1>{banner?.largeText1}</h1>
        <img src={urlFor(banner?.image)} alt="shirt" className="banner-image" />

        <div>
          <Link href={`/product/${banner?.product}`}>
            <button type="button">{banner?.buttonText}</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>{Banner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;


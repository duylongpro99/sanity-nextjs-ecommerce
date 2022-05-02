import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="banner-container">
      <div>
        <p className="beats-solo"></p>
        <h3>MID TEXT</h3>
        <img src="" alt="shirt" className="banner-image" />

        <div>
          <Link href="/product/ID">
            <button type="button">BUTTON TEXT</button>
          </Link>
          <div className="desc">
            <h5>description</h5>
            <p>DESCRIPTION</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;


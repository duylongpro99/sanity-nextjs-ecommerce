import { Container, Image } from "@nextui-org/react";
import React from "react";
import { SHOP_BANNER_IMAGE_KEY } from "../../constants/index.js";
import { client, urlFor } from "../../lib/client";

const Home = ({ homeBanner }) => {
  if (homeBanner) {
    homeBanner.imgSrc = urlFor(homeBanner.image);
  }
  return (
    <div className="home-page">
      <Container fluid>
        {homeBanner ? (
          <Image objectFit="fill" src={homeBanner.imgSrc} alt="Shop banner" />
        ) : null}
      </Container>
    </div>
  );
};

export async function getStaticProps(context) {
  const query = `*[_type == 'asset' && key == '${SHOP_BANNER_IMAGE_KEY}' ] { name, image}`;
  const banner = await client.fetch(query);
  return {
    props: {
      homeBanner: banner ? banner[0] : null,
    },
  };
}

export default Home;


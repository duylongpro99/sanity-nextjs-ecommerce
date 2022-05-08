import sanityClient from "@sanity/client";
import imageUrlBuiler from "@sanity/image-url";

export const client = sanityClient({
  projectId: "r987h2bg",
  apiVersion: "2021-10-21",
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  dataset: "fashion",
  useCdn: true,
});

const builder = imageUrlBuiler(client);

export const urlFor = (source) => builder.image(source);


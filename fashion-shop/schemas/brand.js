export default {
  name: "brand",
  title: "Sport Brand",
  type: "document",
  fields: [
    {
      title: "Brand name",
      name: "name",
      type: "string",
    },
    {
      title: "Brand logo",
      name: "logo",
      options: {
        hotspot: true,
      },
      type: "image",
    },
  ],
};


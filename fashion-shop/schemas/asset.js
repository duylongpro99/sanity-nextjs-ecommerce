export default {
  name: "asset",
  type: "document",
  title: "Asset",
  fields: [
    {
      name: "key",
      title: "Asset Key",
      type: "string",
      validation: (Rule) => Rule.required().error("Please enter key of asset"),
    },
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "image",
      title: "Asset Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "text",
      title: "Asset text value",
      type: "string",
    },
  ],
};


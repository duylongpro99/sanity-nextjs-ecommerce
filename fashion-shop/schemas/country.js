export default {
  name: "country",
  title: "Countries",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "code",
      title: "Country code",
      type: "string",
      validation: (Rule) =>
        Rule.required().min(1).max(200).error("code must be provided!"),
    },
    {
      name: "flag",
      title: "Country flag",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};


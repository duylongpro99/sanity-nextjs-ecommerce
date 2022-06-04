export default {
  name: "League",
  title: "Football league",
  type: "document",
  fields: [
    {
      name: "name",
      title: "League's name",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "countryCode",
      title: "Country Code",
      type: "string",
      validation: (Rule) =>
        Rule.required().min(1).max(200).error("Country code must be provided!"),
    },
    {
      name: "code",
      title: "League Code (countryCode_league)",
      type: "string",
      validation: (Rule) =>
        Rule.required().min(1).max(200).error("Code must be provided!"),
    },
    {
      name: "logo",
      title: "League's logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};


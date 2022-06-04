export default {
  name: "club",
  title: "Club",
  type: "document",
  fields: [
    {
      title: "Club name",
      name: "name",
      type: "string",
    },
    {
      title: "CLub logo",
      name: "logo",
      options: {
        hotspot: true,
      },
      type: "image",
    },
    {
      name: "leagueCode",
      title: "League Code",
      type: "string",
      validation: (Rule) =>
        Rule.required().min(1).max(200).error("League code must be provided!"),
    },
    {
      name: "code",
      title: "Club Code (countryCode_leagueCode_club)",
      type: "string",
      validation: (Rule) =>
        Rule.required().min(1).max(200).error("Club code must be provided!"),
    },
  ],
};


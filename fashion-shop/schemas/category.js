export default {
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Category Name",
      type: "string",
      validation: (Rule) => Rule.required().error("Please enter catgory name"),
    },
    {
      name: "code",
      title: "Code",
      type: "string",
      validation: (Rule) => Rule.required().error("Please enter code"),
    },
  ],
};


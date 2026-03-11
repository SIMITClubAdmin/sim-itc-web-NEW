import { defineType, defineField } from "sanity";

export const eventSchema = defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Hackathon", value: "hackathon" },
          { title: "Workshop", value: "workshop" },
          { title: "Event", value: "event" },
          { title: "Project", value: "project" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "date",
      description: "Event date (or start date)",
    }),
    defineField({
      name: "endDate",
      title: "End Date",
      type: "date",
      description: "Optional end date for multi-day events",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "url",
      description: "External link (e.g. registration, recap)",
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description: "Lower numbers appear first (e.g. for past highlights)",
    }),
  ],
  orderings: [
    { title: "Date (newest)", name: "dateDesc", by: [{ field: "date", direction: "desc" }] },
    { title: "Date (oldest)", name: "dateAsc", by: [{ field: "date", direction: "asc" }] },
    { title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: {
    select: { title: "title", category: "category", date: "date" },
    prepare({ title, category, date }) {
      return {
        title: title || "Untitled",
        subtitle: [category, date].filter(Boolean).join(" · "),
      };
    },
  },
});

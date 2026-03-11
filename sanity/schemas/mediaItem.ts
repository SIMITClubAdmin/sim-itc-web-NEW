import { defineType, defineField } from "sanity";

export const mediaItemSchema = defineType({
  name: "mediaItem",
  title: "Media Item",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "date",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "videoUrl",
      title: "Video URL",
      type: "url",
      description: "Link to video (e.g. YouTube, or direct file URL)",
    }),
    defineField({
      name: "eventRef",
      title: "Related Event",
      type: "reference",
      to: [{ type: "event" }],
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
    }),
  ],
  orderings: [
    { title: "Date (newest)", name: "dateDesc", by: [{ field: "date", direction: "desc" }] },
    { title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: {
    select: { title: "title", date: "date", media: "image" },
    prepare({ title, date, media }) {
      return {
        title: title || "Untitled",
        subtitle: date,
        media,
      };
    },
  },
});

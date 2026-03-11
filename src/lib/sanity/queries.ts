/** GROQ queries for SIM IT Club content */

export const eventsQuery = `
  *[_type == "event"] | order(date desc) {
    _id,
    title,
    slug,
    category,
    date,
    endDate,
    description,
    image,
    link,
    order
  }
`;

export const eventsByCategoryQuery = (category: string) => `
  *[_type == "event" && category == $category] | order(date desc) {
    _id,
    title,
    slug,
    category,
    date,
    endDate,
    description,
    image,
    link,
    order
  }
`;

export const partnersQuery = `
  *[_type == "partner"] | order(order asc, name asc) {
    _id,
    name,
    logo,
    url,
    order
  }
`;

export const mediaGalleryQuery = `
  *[_type == "mediaItem"] | order(date desc, order asc) {
    _id,
    title,
    date,
    image,
    videoUrl,
    eventRef->{ title, slug },
    order
  }
`;

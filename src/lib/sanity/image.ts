import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "./client";

const emptyBuilder = { width: () => emptyBuilder, height: () => emptyBuilder, url: () => "" };

/** Build a Sanity image URL (e.g. urlFor(image).width(400).url()). Returns a no-op builder if Sanity is not configured. */
export function urlFor(
  source: Parameters<ReturnType<typeof imageUrlBuilder>["image"]>[0]
) {
  if (!sanityClient || !source) return emptyBuilder;
  return imageUrlBuilder(sanityClient).image(source);
}

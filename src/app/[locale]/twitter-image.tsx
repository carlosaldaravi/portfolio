import { createOGImage } from "@/lib/og-image";


export const alt = "Carlos Aldaravi - Software Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function TwitterImage() {
  return createOGImage("Software Developer");
}

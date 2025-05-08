import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Upload } from "@/lib/api/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Prefixes a path with the API URL if it's not already a full URL
 * @param path The path to prefix
 * @returns The full URL or the original path if it's already a full URL
 */
export function getFullPath(path: string | null | undefined): string {
  if (!path) return "";

  // If the path is already a full URL, return it as is
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  // Prefix with API URL
  return `${process.env.NEXT_PUBLIC_API_URL}/${cleanPath}`;
}

/**
 * Normalizes project images into an array of Upload objects
 * @param images The images data from the project
 * @returns Array of Upload objects
 */
export function normalizeProjectImages(images: string | Upload | Upload[] | null | undefined): Upload[] {
  if (!images) return [];

  if (Array.isArray(images)) {
    return images;
  }

  // If it's a single Upload object
  if (typeof images === "object" && "path" in images) {
    return [images];
  }

  // If it's a string, it's a comma-separated list of image IDs
  if (typeof images === "string") {
    return images.split(",").map((id) => ({
      id: parseInt(id.trim()),
      path: id.trim(),
      title: "",
      size: "",
      type: "",
      extension: "",
      user_id: 0,
      external_link: "",
      created_at: "",
      updated_at: "",
    }));
  }

  return [];
}

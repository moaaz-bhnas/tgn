import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

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

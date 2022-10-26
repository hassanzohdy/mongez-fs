import { stats } from "./stats";

/**
 * Get last modified time of the given path
 */
export function lastModified(path: string): Date {
  try {
    return stats(path).mtime;
  } catch (e) {
    return new Date();
  }
}

export const fileLastModified = lastModified;
export const directoryLastModified = lastModified;

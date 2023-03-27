import { stats, statsAsync } from "./stats";

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

/**
 * Get last modified time of the given path async
 */
export async function lastModifiedAsync(path: string): Promise<Date> {
  try {
    return (await statsAsync(path)).mtime;
  } catch (e) {
    return new Date();
  }
}

export const fileLastModifiedAsync = lastModifiedAsync;
export const directoryLastModifiedAsync = lastModifiedAsync;

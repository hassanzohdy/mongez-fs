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
  return new Promise(async (resolve, reject) => {
    try {
      resolve((await statsAsync(path)).mtime);
    } catch (e) {
      reject(e);
    }
  });
}

export const fileLastModifiedAsync = lastModifiedAsync;
export const directoryLastModifiedAsync = lastModifiedAsync;

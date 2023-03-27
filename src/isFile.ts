import { stats, statsAsync } from "./stats";

/**
 * Determine if the given path is directory
 */
export function isFile(path: string) {
  try {
    return stats(path).isFile();
  } catch (e) {
    // lstatSync throws an error if path doesn't exist
    return false;
  }
}

/**
 * Check if the given path is file async
 */
export async function isFileAsync(path: string) {
  return new Promise((resolve) => {
    statsAsync(path)
      .then((stat) => {
        resolve(stat.isFile());
      })
      .catch(() => {
        resolve(false);
      });
  });
}

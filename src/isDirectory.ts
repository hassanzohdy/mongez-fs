import { stats, statsAsync } from "./stats";

/**
 * Determine if the given path is directory
 */
export function isDir(path: string) {
  try {
    return stats(path).isDirectory();
  } catch (e) {
    // lstatSync throws an error if path doesn't exist
    return false;
  }
}

export const isDirectory = isDir;

/**
 * Determine if the given path is directory async
 */
export async function isDirAsync(path: string) {
  try {
    return (await statsAsync(path)).isDirectory();
  } catch (e) {
    // lstatSync throws an error if path doesn't exist
    return false;
  }
}

export const isDirectoryAsync = isDirAsync;

import { stats } from "./stats";

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

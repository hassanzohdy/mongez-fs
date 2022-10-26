import { stats } from "./stats";

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

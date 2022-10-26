import { getFile } from "./getFile";

/**
 * Return the lines of the given file
 */
export function lines(path: string) {
  try {
    return getFile(path).split(/\n|\r\n/);
  } catch (error) {
    return [];
  }
}

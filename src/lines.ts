import { getFile, getFileAsync } from "./getFile";

/**
 * Return the lines of the given file
 */
export function fileLines(path: string) {
  try {
    return getFile(path).split(/\n|\r\n/);
  } catch (error) {
    return [];
  }
}

/**
 * Get async the lines of the given file
 */
export async function fileLinesAsync(path: string) {
  try {
    const content = await getFileAsync(path);
    return content.split(/\n|\r\n/);
  } catch (error) {
    return [];
  }
}

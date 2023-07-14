import { getFile, getFileAsync } from "./getFile";

/**
 * Return the lines of the given file
 */
export function fileLines(path: string) {
  try {
    return getFile(path).split(/\n|\r\n/);
  } catch (error) {
    throw error;
  }
}

/**
 * Get async the lines of the given file
 */
export async function fileLinesAsync(path: string) {
  return new Promise(async (resolve, reject) => {
    try {
      const content = await getFileAsync(path);
      resolve(content.split(/\n|\r\n/));
    } catch (error) {
      reject(error);
    }
  });
}

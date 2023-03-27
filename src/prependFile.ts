import { WriteFileOptions } from "fs";
import { getFile, getFileAsync } from "./getFile";
import { putFile, putFileAsync } from "./putFile";

/**
 * Add content at the beginning of the given file path
 */
export function prependFile(
  path: string,
  content: string | number | boolean,
  options: WriteFileOptions = "utf8"
) {
  try {
    const fileContents = getFile(path);

    putFile(path, content + fileContents, options);
  } catch (error) {
    return;
  }
}

/**
 * @async Add content at the beginning of the given file path
 */
export async function prependFileAsync(
  path: string,
  content: string | number | boolean,
  options: WriteFileOptions = "utf8"
) {
  return new Promise(async (resolve, reject) => {
    const fileContents = await getFileAsync(path);

    try {
      await putFileAsync(path, content + fileContents, options);

      resolve(true);
    } catch (error) {
      resolve(error);
    }
  });
}

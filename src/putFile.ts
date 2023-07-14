import { WriteFileOptions, writeFileSync, promises } from "fs";

/**
 * Put the given content into the given file path
 */
export function putFile(
  path: string,
  content: string | number | boolean,
  options: WriteFileOptions = "utf8"
) {
  writeFileSync(path, String(content), options);
}

/**
 * @async Put the given content into the given file path
 */
export async function putFileAsync(
  path: string,
  content: string | number | boolean,
  options: WriteFileOptions = "utf8"
) {
  return new Promise<void>(async (resolve, reject) => {
    try {
      await promises.writeFile(path, String(content), options);
      resolve();
    } catch (error) {
      reject(error);
    }
  });
}

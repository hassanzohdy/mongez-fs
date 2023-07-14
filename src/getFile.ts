import { readFileSync, promises } from "fs";

/**
 * Get the content of the given file
 */
export function getFile(path: string): string {
  return readFileSync(path, "utf8");
}

/**
 * @async Get the content of the given file
 */
export async function getFileAsync(path: string): Promise<string> {
  return new Promise(async (resolve, reject) => {
    try {
      resolve(await promises.readFile(path, "utf8"));
    } catch (error) {
      reject(error);
    }
  });
}

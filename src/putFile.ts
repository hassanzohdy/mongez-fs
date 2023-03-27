import { writeFile, WriteFileOptions, writeFileSync } from "fs";
import { promisify } from "util";

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
  return promisify(writeFile)(path, String(content), options);
}

// append content to file
import {
  appendFile as baseAppendFile,
  appendFileSync,
  WriteFileOptions,
} from "fs";
import { promisify } from "util";

/**
 * Append the given content to the given file path
 */
export function appendFile(
  filePath: string,
  content: string | number | boolean,
  options: WriteFileOptions = "utf8"
) {
  appendFileSync(filePath, String(content), options);
}

/**
 * @async Append the given content to the given file path
 */
export async function appendFileAsync(
  filePath: string,
  content: string | number | boolean,
  options: WriteFileOptions = "utf8"
) {
  return promisify(baseAppendFile)(filePath, String(content), options);
}

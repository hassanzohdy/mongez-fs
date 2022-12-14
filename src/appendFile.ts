// append content to file
import { appendFileSync, WriteFileOptions } from "fs";

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

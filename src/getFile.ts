import { readFile, readFileSync } from "fs";
import { promisify } from "util";

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
  return promisify(readFile)(path).then((data) => data.toString());
}

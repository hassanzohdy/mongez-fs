import { readFileSync } from "fs-extra";

/**
 * Get the content of the given file
 */
export function getFile(path: string): string {
  return readFileSync(path, "utf8");
}

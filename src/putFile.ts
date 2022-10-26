import { writeFileSync } from "fs-extra";

/**
 * Put the given content into the given file path
 */
export function putFile(
  path: string,
  content: string | number | boolean
): void {
  writeFileSync(path, String(content), "utf8");
}

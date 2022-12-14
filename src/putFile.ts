import { WriteFileOptions, writeFileSync } from "fs";

/**
 * Put the given content into the given file path
 */
export function putFile(
  path: string,
  content: string | number | boolean,
  options: WriteFileOptions = "utf8"
): void {
  writeFileSync(path, String(content), options);
}

export function touch(path: string, options?: WriteFileOptions): void {
  putFile(path, "", options);
}

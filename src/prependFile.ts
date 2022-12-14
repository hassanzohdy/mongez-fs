import { WriteFileOptions } from "fs";
import { getFile } from "./getFile";
import { putFile } from "./putFile";

/**
 * Add content at the beginning of the given file path
 */
export function prependFile(
  path: string,
  content: string | number | boolean,
  options: WriteFileOptions = "utf8"
) {
  const fileContents = getFile(path);

  if (!fileContents) {
    return;
  }

  putFile(path, content + fileContents, options);
}

import { isFile } from "./isFile";
import { list } from "./list";

/**
 * Get all files in the given path <Non Recursive>
 */
export function listFiles(path: string) {
  return list(path).filter((innerPath) => isFile(path + "/" + innerPath));
}

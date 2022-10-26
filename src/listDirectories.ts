import { isDirectory } from "./isDirectory";
import { list } from "./list";

/**
 * Get all directories in the given path <Non Recursive>
 */
export function listDirectories(path: string) {
  return list(path).filter((innerPath) => isDirectory(path + "/" + innerPath));
}

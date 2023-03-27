import { isDirectory } from "./isDirectory";
import { list, listAsync } from "./list";

/**
 * Get all directories in the given path <Non Recursive>
 */
export function listDirectories(path: string) {
  return list(path).filter((innerPath) => isDirectory(path + "/" + innerPath));
}

/**
 * Get all directories in the given path <Non Recursive> async
 */
export async function listDirectoriesAsync(path: string) {
  const files = await listAsync(path);
  return files.filter((innerPath) => isDirectory(path + "/" + innerPath));
}

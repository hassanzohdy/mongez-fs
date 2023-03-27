import { isFile } from "./isFile";
import { list, listAsync } from "./list";

/**
 * Get all files in the given path <Non Recursive>
 */
export function listFiles(path: string) {
  return list(path).filter((innerPath) => isFile(path + "/" + innerPath));
}

/**
 * Get all files in the given path <Non Recursive> async
 */
export async function listFilesAsync(path: string) {
  const files = await listAsync(path);
  return files.filter((innerPath) => isFile(path + "/" + innerPath));
}

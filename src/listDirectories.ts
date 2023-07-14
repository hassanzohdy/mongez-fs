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
  return new Promise(async (resolve, reject) => {
    try {
      const files = await listAsync(path);
      resolve(files.filter((innerPath) => isDirectory(path + "/" + innerPath)));
    } catch (error) {
      reject(error);
    }
  });
}

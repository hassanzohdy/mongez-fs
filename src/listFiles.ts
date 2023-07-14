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
  return new Promise(async (resolve, reject) => {
    try {
      const files = await listAsync(path);
      resolve(files.filter((innerPath) => isFile(path + "/" + innerPath)));
    } catch (error) {
      reject(error);
    }
  });
}

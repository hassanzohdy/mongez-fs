import { removeSync } from "fs-extra";

/**
 * remove the given path
 */
export function removeFile(path: string): void {
  removeSync(path);
}

export const remove = removeFile;
export const unlink = removeFile;
export const removeDirectory = removeFile;
export const rmdir = removeFile;

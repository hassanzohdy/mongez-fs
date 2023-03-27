import { rmSync } from "fs";

/**
 * remove the given path
 */
export function removePath(
  path: string,
  options: {
    force?: boolean;
    recursive?: boolean;
  } = {
    force: true,
    recursive: true,
  }
): void {
  rmSync(path, options);
}

export const unlink = removePath;
export const removeDirectory = removePath;
export const rmdir = removePath;

/**
 * remove the given path async
 */
export async function removePathAsync(
  path: string,
  options: {
    force?: boolean;
    recursive?: boolean;
  } = {
    force: true,
    recursive: true,
  }
): Promise<void> {
  return new Promise((resolve) => {
    removePath(path, options);
    resolve();
  });
}

export const unlinkAsync = removePathAsync;
export const removeDirectoryAsync = removePathAsync;
export const rmdirAsync = removePathAsync;

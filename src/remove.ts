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

import { rename, renameSync } from "fs";

/**
 * Rename the given path to a new location
 */
export function renamePath(target: string, destination: string): void {
  renameSync(target, destination);
}

export const renameFile = renamePath;
export const renameDirectory = renamePath;

// async version

export async function renamePathAsync(
  target: string,
  destination: string
): Promise<void> {
  return new Promise((resolve, reject) => {
    rename(target, destination, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}

export const renameFileAsync = renamePathAsync;
export const renameDirectoryAsync = renamePathAsync;

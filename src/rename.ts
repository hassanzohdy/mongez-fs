import { promises, renameSync } from "fs";

/**
 * Rename the given path to a new location
 */
export function renamePath(target: string, destination: string): void {
  renameSync(target, destination);
}

export const renameFile = renamePath;
export const renameDirectory = renamePath;

// async version

export async function renamePathAsync(target: string, destination: string) {
  return promises.rename(target, destination);
}

export const renameFileAsync = renamePathAsync;
export const renameDirectoryAsync = renamePathAsync;

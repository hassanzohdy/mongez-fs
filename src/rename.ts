import { renameSync } from "fs";

/**
 * Rename the given path to a new location
 */
export function renamePath(target: string, destination: string): void {
  renameSync(target, destination);
}

export const renameFile = renamePath;
export const renameDirectory = renamePath;

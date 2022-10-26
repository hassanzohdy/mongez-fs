import { renameSync } from "fs-extra";

/**
 * Rename the given path to a new location
 */
export function rename(target: string, destination: string): void {
  renameSync(target, destination);
}

export const renameFile = rename;
export const renameDirectory = rename;

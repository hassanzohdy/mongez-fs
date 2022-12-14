import { renameSync } from "fs";

/**
 * Move the given source to new target
 */
export function movePath(target: string, destination: string): void {
  renameSync(target, destination);
}

export const moveDirectory = movePath;
export const moveFile = movePath;

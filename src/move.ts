import { moveSync } from "fs-extra";

/**
 * Move the given source to new target
 */
export function move(target: string, destination: string): void {
  moveSync(target, destination);
}

export const moveDirectory = move;
export const moveFile = move;

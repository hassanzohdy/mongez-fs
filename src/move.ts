import { renameSync, promises } from "fs";

/**
 * Move the given source to new target
 */
export function movePath(target: string, destination: string): void {
  renameSync(target, destination);
}

export const moveDirectory = movePath;
export const moveFile = movePath;

/**
 * Move the given source to new target async
 */
export async function movePathAsync(
  target: string,
  destination: string
) {
  return promises.rename(target, destination)
}

export const moveDirectoryAsync = movePathAsync;
export const moveFileAsync = movePathAsync;

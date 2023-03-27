import { renameSync } from "fs";

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
): Promise<void> {
  return new Promise((resolve) => {
    renameSync(target, destination);
    resolve();
  });
}

export const moveDirectoryAsync = movePathAsync;
export const moveFileAsync = movePathAsync;

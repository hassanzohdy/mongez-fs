import { copyFileSync } from "fs";

/**
 * Copy the given source to the new target
 */
export function copyPath(source: string, target: string): void {
  return copyFileSync(source, target);
}

export const copyFile = copyPath;
export const copyDirectory = copyPath;

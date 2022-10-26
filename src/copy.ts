import { copySync } from "fs-extra";

/**
 * Copy the given source to the new target
 */
export function copy(source: string, target: string): void {
  return copySync(source, target);
}

export const copyFile = copy;
export const copyDirectory = copy;

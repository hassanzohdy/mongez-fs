import { ensureDirSync } from "fs-extra";

/**
 * Create new directory if the given path does not exist
 */
export function makeDirectory(path: string, mode?: number): void {
  ensureDirSync(path, {
    mode,
  });
}

export const mkdir = makeDirectory;
export const ensureDirectory = makeDirectory;
export const createDirectory = makeDirectory;

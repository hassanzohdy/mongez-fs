import fsExtra from "fs-extra";

/**
 * Determine if the given path exists
 */
export function exists(path: string) {
  return fsExtra.existsSync(path);
}

export const fileExists = exists;

export const directoryExists = exists;

export const pathExists = exists;

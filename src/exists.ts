import { accessSync } from "fs";

/**
 * Determine if the given path exists
 */
export function pathExists(path: string) {
  try {
    accessSync(path);
    return true;
  } catch (error) {
    return false;
  }
}

export const fileExists = pathExists;

export const directoryExists = pathExists;

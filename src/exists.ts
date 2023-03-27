import { access as baseAccess, accessSync } from "fs";
import { promisify } from "util";

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

/**
 * @async Determine if the given path exists
 */
export async function pathExistsAsync(path: string) {
  return promisify(baseAccess)(path)
    .then(() => true)
    .catch(() => false);
}

export const fileExistsAsync = pathExistsAsync;

export const directoryExistsAsync = pathExistsAsync;

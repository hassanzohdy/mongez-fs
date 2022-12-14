import { MakeDirectoryOptions, mkdirSync } from "fs";
import { directoryExists } from "./exists";

/**
 * Create new directory if the given path does not exist
 */
export function makeDirectory(
  path: string,
  options: MakeDirectoryOptions = {
    mode: 0o777,
    recursive: true,
  }
): void {
  mkdirSync(path, options);
}

export const mkdir = makeDirectory;
export const createDirectory = makeDirectory;

export function ensureDirectory(
  path: string,
  options?: MakeDirectoryOptions
): void {
  if (!directoryExists(path)) {
    makeDirectory(path, options);
  }
}

import { MakeDirectoryOptions, mkdir as baseMkdir, mkdirSync } from "fs";
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

/**
 * Create new directory if the given path does not exist async
 */
export async function makeDirectoryAsync(
  path: string,
  options: MakeDirectoryOptions = {
    mode: 0o777,
    recursive: true,
  }
): Promise<void> {
  return new Promise((resolve) => {
    baseMkdir(path, options, () => {
      resolve();
    });
  });
}

export const mkdirAsync = makeDirectoryAsync;
export const createDirectoryAsync = makeDirectoryAsync;

export async function ensureDirectoryAsync(
  path: string,
  options?: MakeDirectoryOptions
): Promise<void> {
  return new Promise((resolve) => {
    if (!directoryExists(path)) {
      makeDirectory(path, options);
    }
    resolve();
  });
}

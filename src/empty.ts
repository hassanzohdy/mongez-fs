import { getFile, getFileAsync } from "./getFile";
import { list, listAsync } from "./list";

/**
 * Check if the given file path is empty
 *
 * If file does not exist, it will return true
 */
export function isEmptyFile(path: string): boolean {
  try {
    return getFile(path).length === 0;
  } catch (error) {
    return true;
  }
}

/**
 * Check if the given file path is not empty
 */
export function isNotEmptyFile(path: string): boolean {
  return !isEmptyFile(path);
}

/**
 * Check if the given directory path is empty
 */
export function isEmptyDirectory(path: string): boolean {
  try {
    return list(path).length === 0;
  } catch (error) {
    return true;
  }
}

/**
 * Check if the given directory is not empty
 */
export function isNotEmptyDirectory(path: string): boolean {
  return !isEmptyDirectory(path);
}

// Async version
export async function isEmptyFileAsync(path: string): Promise<boolean> {
  return new Promise(async (resolve) => {
    try {
      resolve((await getFileAsync(path)).length === 0);
    } catch (error) {
      resolve(true);
    }
  });
}

export async function isNotEmptyFileAsync(path: string): Promise<boolean> {
  return !(await isEmptyFileAsync(path));
}

export async function isEmptyDirectoryAsync(path: string): Promise<boolean> {
  return new Promise(async (resolve) => {
    try {
      resolve((await listAsync(path)).length === 0);
    } catch (error) {
      resolve(true);
    }
  });
}

export async function isNotEmptyDirectoryAsync(path: string): Promise<boolean> {
  return !(await isEmptyDirectoryAsync(path));
}

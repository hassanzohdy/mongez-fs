import fastFolderSizeAsync from "fast-folder-size";
import fastFolderSize from "fast-folder-size/sync";
import { isDirectory, isDirectoryAsync } from "./isDirectory";
import { stats, statsAsync } from "./stats";
import { ExecException } from "child_process";

/**
 * Get size of the given path either file or directory in bytes
 */
export function pathSize(path: string): number {
  if (isDirectory(path)) {
    return fastFolderSize(path) || 0;
  }

  try {
    return stats(path).size;
  } catch (e) {
    return 0;
  }
}

export const fileSize = pathSize;

export const directorySize = pathSize;

/**
 * Get the size of the given path async
 */
export async function pathSizeAsync(path: string) {
  return new Promise<number>(async (resolve, reject) => {
    try {
      if (await isDirectoryAsync(path)) {
        fastFolderSizeAsync(
          path,
          (error: ExecException | null, bytes?: number) => {
            if (error) {
              reject(error);
            } else if (bytes) {
              resolve(bytes);
            }
          }
        );
      } else {
        resolve((await statsAsync(path)).size);
      }
    } catch (error) {
      reject(error);
    }
  });
}

export const fileSizeAsync = pathSizeAsync;
export const directorySizeAsync = pathSizeAsync;

/**
 * Get the size if the given path and convert it to human readable format
 */
export function humanSize(path: string) {
  const bytes = pathSize(path);

  return calculateSize(bytes);
}

function calculateSize(bytes: number) {
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];

  if (bytes === 0) {
    return "0 Byte";
  }

  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / 1024 ** i).toFixed(2)} ${sizes[i]}`;
}

// async version
export async function humanSizeAsync(path: string) {
  return new Promise(async (resolve, reject) => {
    try {
      const bytes = await pathSizeAsync(path);

      resolve(calculateSize(bytes));
    } catch (error) {
      reject(error);
    }
  });
}

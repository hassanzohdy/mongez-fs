import fastFolderSize from "fast-folder-size/sync";
import { isDirectory } from "./isDirectory";
import { stats } from "./stats";

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
 * Get the size if the given path and convert it to human readable format
 */
export function humanSize(path: string) {
  const bytes = pathSize(path);
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];

  if (bytes === 0) {
    return "0 Byte";
  }

  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / 1024 ** i).toFixed(2)} ${sizes[i]}`;
}

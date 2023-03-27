import { copyFile as baseCopyFile, copyFileSync } from "fs";

/**
 * Copy the given source to the new target
 */
export function copyPath(source: string, target: string): void {
  return copyFileSync(source, target);
}

export const copyFile = copyPath;
export const copyDirectory = copyPath;

/**
 * @async Copy the given source to the new target
 */
export async function copyPathAsync(
  source: string,
  target: string
): Promise<boolean> {
  return new Promise((resolve, reject) => {
    baseCopyFile(source, target, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(true);
      }
    });
  });
}

export const copyFileAsync = copyPathAsync;
export const copyDirectoryAsync = copyPathAsync;

import fs from "fs";
import path from "path";
import { isFile } from "./isFile";

/**
 * Copy the given source to the new target
 */
export function copyPath(source: string, target: string): void {
  if (isFile(source)) {
    return fs.copyFileSync(source, target);
  }

  return copyDirectory(source, target);
}

/**
 * Copy the given source file to the new target file
 */
export function copyFile(source: string, target: string): void {
  fs.copyFileSync(source, target);
}

/**
 * Copy the given source directory to the new target directory
 */
export function copyDirectory(source: string, destination: string): void {
  // Create the destination directory if it doesn't exist
  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination, { recursive: true });
  }

  // Read all the items (files and subdirectories) from the source directory
  const items = fs.readdirSync(source, { withFileTypes: true });

  items.forEach((item) => {
    const sourcePath = path.join(source, item.name);
    const destinationPath = path.join(destination, item.name);

    if (item.isDirectory()) {
      // If it's a directory, recurse into it
      copyDirectory(sourcePath, destinationPath);
    } else {
      // If it's a file, copy it
      fs.copyFileSync(sourcePath, destinationPath);
    }
  });
}

/**
 * @async Copy the given source to the new target
 */
export async function copyPathAsync(
  source: string,
  target: string
): Promise<void> {
  try {
    if (isFile(source)) {
      return await fs.promises.copyFile(source, target);
    }

    return await copyDirectoryAsync(source, target);
  } catch (error) {
    throw error;
  }
}

/**
 * @async Copy the given source directory to the new target directory
 */
export function copyFileAsync(source: string, target: string): Promise<void> {
  return fs.promises.copyFile(source, target);
}

/**
 * @async Copy the given source directory to the new target directory
 */
export async function copyDirectoryAsync(
  source: string,
  destination: string
): Promise<void> {
  try {
    // Check if the destination directory exists, if not, create it
    await fs.promises.mkdir(destination, { recursive: true });

    // Read all the items (files and subdirectories) from the source directory
    const items = await fs.promises.readdir(source, { withFileTypes: true });

    for (const item of items) {
      const sourcePath = path.join(source, item.name);
      const destinationPath = path.join(destination, item.name);

      if (item.isDirectory()) {
        // If it's a directory, recurse into it
        await copyDirectoryAsync(sourcePath, destinationPath);
      } else {
        // If it's a file, copy it
        await fs.promises.copyFile(sourcePath, destinationPath);
      }
    }
  } catch (error) {
    console.error("Error copying directory:", error);
  }
}

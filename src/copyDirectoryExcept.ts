import fs from "fs";
import path from "path";
import { directoryExistsAsync } from "./exists";
import { ensureDirectoryAsync } from "./makeDirectory";

export function copyDirectoryExcept(
  source: string,
  destination: string,
  exceptPaths: string[]
) {
  try {
    // Check if source and destination exist
    if (!fs.existsSync(source)) {
      throw new Error(`Source directory ${source} does not exist`);
    }
    if (!fs.existsSync(destination)) {
      fs.mkdirSync(destination);
    }

    // Get list of files and directories in source directory
    const files = fs.readdirSync(source);

    exceptPaths = exceptPaths.map((exceptPath) =>
      path.join(source, exceptPath)
    );

    // Loop through files and directories
    for (const file of files) {
      const filePath = path.join(source, file);

      // Check if file or directory is in exceptPaths
      if (exceptPaths.includes(filePath)) {
        continue;
      }

      // Get stats of file or directory
      const stats = fs.statSync(filePath);

      // If file is a directory, recursively copy the directory
      if (stats.isDirectory()) {
        const newDestination = path.join(destination, file);
        copyDirectoryExcept(filePath, newDestination, exceptPaths);
      }
      // If file is a file, copy the file to the destination
      else if (stats.isFile()) {
        const newFilePath = path.join(destination, file);
        fs.copyFileSync(filePath, newFilePath);
      }
    }
  } catch (error) {
    console.error(`Error copying directory: ${error}`);
  }
}

export async function copyDirectoryExceptAsync(
  source: string,
  destination: string,
  exceptPaths: string[]
) {
  return new Promise(async (resolve, reject) => {
    try {
      // Check if source and destination exist
      if (!(await directoryExistsAsync(source))) {
        throw new Error(`Source directory ${source} does not exist`);
      }

      await ensureDirectoryAsync(destination);

      // Get list of files and directories in source directory
      const files = await fs.promises.readdir(source);

      exceptPaths = exceptPaths.map((exceptPath) =>
        path.join(source, exceptPath)
      );

      // Loop through files and directories
      for (const file of files) {
        const filePath = path.join(source, file);

        // Check if file or directory is in exceptPaths
        if (exceptPaths.includes(filePath)) {
          continue;
        }

        // Get stats of file or directory
        const stats = await fs.promises.stat(filePath);

        // If file is a directory, recursively copy the directory
        if (stats.isDirectory()) {
          const newDestination = path.join(destination, file);
          await copyDirectoryExceptAsync(filePath, newDestination, exceptPaths);
        }
        // If file is a file, copy the file to the destination
        else if (stats.isFile()) {
          const newFilePath = path.join(destination, file);
          await fs.promises.copyFile(filePath, newFilePath);
        }
      }
    } catch (error) {
      throw error;
    }
  });
}

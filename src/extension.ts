import path from "path";

/**
 * Get file extension
 */
export function extension(filePath: string): string {
  return path.extname(filePath);
}

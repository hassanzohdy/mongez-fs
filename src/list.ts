import { readdirSync } from "fs";

/**
 * Get all directories and files in the given path <Non Recursive>
 */
export function list(path: string) {
  return readdirSync(path);
}

import { promises, readdirSync } from "fs";

/**
 * Get all directories and files in the given path <Non Recursive>
 */
export function list(path: string) {
  return readdirSync(path);
}

/**
 * Get all directories and files in the given path <Non Recursive> async
 */
export async function listAsync(path: string) {
  return promises.readdir(path);
}

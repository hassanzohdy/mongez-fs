import { readJsonSync } from "fs-extra";

/**
 * Load the given json file path
 */
export function jsonFile(path: string) {
  return readJsonSync(path);
}

export const getJson = jsonFile;

export const getJsonFile = jsonFile;

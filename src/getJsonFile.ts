import { getFile, getFileAsync } from "./getFile";

/**
 * Load the given json file path
 *
 * @param path The path of the json file
 * @param reviver A function that transforms the results. This function is called for each member of the object.
 * If a member contains nested objects, the nested objects are transformed before the parent object is.
 */
export function jsonFile(
  path: string,
  reviver?: (this: any, key: string, value: any) => any
) {
  try {
    const content = getFile(path);

    return JSON.parse(content, reviver);
  } catch (error) {
    throw error;
  }
}

export const getJsonFile = jsonFile;

/**
 * Get async the given json file path
 */
export async function jsonFileAsync(
  path: string,
  reviver?: (this: any, key: string, value: any) => any
) {
  try {
    const content = await getFileAsync(path);

    return JSON.parse(content, reviver);
  } catch (error) {
    throw error;
  }
}

export const getJsonFileAsync = jsonFileAsync;

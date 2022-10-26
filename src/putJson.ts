import { writeJsonSync, WriteOptions } from "fs-extra";

/**
 * Put the given object in the given path in json format
 */
export function putJson(
  path: string,
  data: unknown,
  options: WriteOptions = { spaces: 4 }
) {
  writeJsonSync(path, data, options);
}

export const putJsonFile = putJson;

import { existsSync, openSync, promises } from "fs";
import { pathExistsAsync } from "./exists";

/**
 * Touch the given file path
 */
export function touch(location: string) {
  if (existsSync(location)) return;

  openSync(location, "w");
}

/**
 * @async Touch the given file path
 */
export async function touchAsync(path: string) {
  return new Promise<void>(async (resolve) => {
    try {
      if (await pathExistsAsync(path)) return resolve();

      promises.open(path, "w");

      resolve();
    } catch (error) {
      // Do nothing
    }
  });
}

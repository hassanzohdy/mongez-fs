import { existsSync, openSync } from "fs";

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
export async function touchAsync(path: string): Promise<void> {
  return new Promise(async (resolve) => {
    if (existsSync(path)) return resolve();

    openSync(path, "w");

    resolve();
  });
}

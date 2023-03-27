import { stat, Stats, statSync } from "fs";
import { promisify } from "util";

const cachedPaths: Record<string, Stats> = {};

/**
 * Get path stats
 */
export function stats(path: string, cache = true) {
  if (!cache || !cachedPaths[path]) {
    cachedPaths[path] = statSync(path);
  }

  return cachedPaths[path];
}

/**
 * Get path stats async
 */
export async function statsAsync(path: string, cache = true): Promise<Stats> {
  return new Promise(async (resolve, reject) => {
    try {
      const cachedPath = cachedPaths[path];

      if (cache && cachedPath) {
        resolve(cachedPath);
        return;
      }

      const stats = await promisify(stat)(path);

      cachedPaths[path] = stats;

      resolve(stats);
    } catch (error) {
      reject(error);
    }
  });
}

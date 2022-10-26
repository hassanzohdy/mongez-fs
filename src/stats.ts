import { Stats, statSync } from "fs";

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

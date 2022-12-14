import { writeFileSync } from "fs";

type WriteOptions = {
  spaces?: number | string;
  replacer?: (this: any, key: string, value: any) => any;
};

/**
 * Put the given object in the given path in json format
 */
export function putJsonFile(
  path: string,
  data: unknown,
  options: WriteOptions = { spaces: 4 }
) {
  writeFileSync(
    path,
    JSON.stringify(data, options.replacer, options.spaces),
    "utf8"
  );
}

import { writeFileSync, promises } from "fs";

type WriteOptions = {
  spaces?: number | string;
  replacer?: (this: any, key: string, value: any) => any;
};

/**
 * Put the given object in the given path in json format
 */
export function putJsonFile(
  path: string,
  data: any,
  options: WriteOptions = { spaces: 4 }
) {
  writeFileSync(
    path,
    JSON.stringify(data, options.replacer, options.spaces),
    "utf8"
  );
}

/**
 * Put async the given object in the given path in json format
 */
export async function putJsonFileAsync(
  path: string,
  data: any,
  options: WriteOptions = { spaces: 4 }
): Promise<void> {
  return new Promise(async (resolve, reject) => {
    try {
      await promises.writeFile(
        path,
        JSON.stringify(data, options.replacer, options.spaces),
        "utf8"
      );

      resolve();
    } catch (error) {
      reject(error);
    }
  });
}

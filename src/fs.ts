import { copy } from "./copy";
import { exists } from "./exists";
import { getFile } from "./getFile";
import { getJsonFile } from "./getJsonFile";
import { isDirectory } from "./isDirectory";
import { isFile } from "./isFile";
import { lines } from "./lines";
import { list } from "./list";
import { listDirectories } from "./listDirectories";
import { listFiles } from "./listFiles";
import { lastModified } from "./lsatModified";
import { makeDirectory } from "./makeDirectory";
import { move } from "./move";
import { put } from "./putFile";
import { putJson } from "./putJson";
import { rename } from "./rename";
import { size } from "./size";
import { stats } from "./stats";

const fs = {
  lastModified,
  copy,
  move,
  rename,
  isDirectory,
  isFile,
  list,
  listDirectories,
  listFiles,
  exists,
  getJson: getJsonFile,
  jsonFile: getJsonFile,
  get: getFile,
  size,
  lines,
  makeDirectory,
  put: put,
  putJson,
  stats,
};

export default fs;

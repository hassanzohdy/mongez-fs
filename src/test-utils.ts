import path from "path";
import { unlink } from "./remove";
import { touch } from "./touch";

export function initTextFile() {
  // generate random file name
  const fileName = Math.random().toString(36).substring(7) + ".txt";
  const filePath = path.join(__dirname, fileName);

  beforeAll(() => {
    touch(filePath);
  });

  afterAll(() => {
    unlink(filePath);
  });

  return filePath;
}

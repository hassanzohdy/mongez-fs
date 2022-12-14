import * as path from "path";
import { getFile } from "./getFile";
import { putFile, touch } from "./putFile";
import { unlink } from "./remove";

describe("@mongez/fs/getFile", () => {
  beforeAll(() => {
    const filePath = path.join(__dirname, "test.txt");

    touch(filePath);
  });

  it("should should return file contents", () => {
    const filePath = path.join(__dirname, "test.txt");
    const content = "Hello World";

    putFile(filePath, content);

    expect(getFile(filePath)).toEqual(content);
  });

  afterAll(() => {
    const filePath = path.join(__dirname, "test.txt");

    unlink(filePath);
  });
});

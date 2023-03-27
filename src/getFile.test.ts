import { getFile, getFileAsync } from "./getFile";
import { putFile } from "./putFile";
import { initTextFile } from "./test-utils";

describe("@mongez/fs/getFile", () => {
  const filePath = initTextFile();

  it("should should return file contents", () => {
    const content = "Hello World";

    putFile(filePath, content);

    expect(getFile(filePath)).toEqual(content);
  });
});

describe("@mongez/fs/getFileAsync", () => {
  const filePath = initTextFile();

  it("should should return file contents", async () => {
    const content = "Hello World";

    putFile(filePath, content);

    expect(await getFileAsync(filePath)).toEqual(content);
  });
});

import { getFile, getFileAsync } from "./getFile";
import { prependFile, prependFileAsync } from "./prependFile";
import { initTextFile } from "./test-utils";

describe("@mongez/fs/prependFile", () => {
  const filePath = initTextFile();
  it("should prepend the given content to the given file path", () => {
    const content = "Hello World";
    prependFile(filePath, content);

    expect(getFile(filePath)).toEqual(content);

    prependFile(filePath, content);

    expect(getFile(filePath)).toEqual(content + content);
  });
});

describe("@mongez/fs/prependFileAsync", () => {
  const filePath = initTextFile();
  it("should prepend the given content to the given file path", async () => {
    const content = "Hello World";
    await prependFileAsync(filePath, content);

    expect(await getFileAsync(filePath)).toEqual(content);

    await prependFileAsync(filePath, content);

    expect(await getFileAsync(filePath)).toEqual(content + content);
  });
});

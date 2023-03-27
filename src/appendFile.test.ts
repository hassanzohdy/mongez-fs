import { appendFile, appendFileAsync } from "./appendFile";
import { getFile, getFileAsync } from "./getFile";
import { initTextFile } from "./test-utils";

describe("@mongez/fs/appendFile", () => {
  const filePath = initTextFile();
  it("should append the given content to the given file path", () => {
    const content = "Hello World";
    appendFile(filePath, content);

    expect(getFile(filePath)).toEqual(content);

    appendFile(filePath, content);

    expect(getFile(filePath)).toEqual(content + content);
  });
});

describe("@mongez/fs/appendFileAsync", () => {
  const filePath = initTextFile();
  it("should append the given content to the given file path", async () => {
    const content = "Hello World";
    await appendFileAsync(filePath, content);

    expect(await getFileAsync(filePath)).toEqual(content);

    await appendFileAsync(filePath, content);
  });
});

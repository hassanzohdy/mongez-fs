import { extension } from "./extension";
import { initTextFile } from "./test-utils";

describe("@mongez/fs/extension", () => {
  const filePath = initTextFile();

  it("should get file extension", () => {
    expect(extension(filePath)).toBe(".txt");
  });
});

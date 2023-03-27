import {
  directoryExists,
  directoryExistsAsync,
  fileExists,
  fileExistsAsync,
  pathExists,
  pathExistsAsync,
} from "./exists";
import { initTextFile } from "./test-utils";

describe("@mongez/fs/exists", () => {
  const filePath = initTextFile();

  it("should find the file", () => {
    expect(fileExists(filePath)).toBeTruthy();
  });

  it("should find directory exist", () => {
    expect(directoryExists(__dirname)).toBeTruthy();
  });

  it("should find path exists", () => {
    expect(pathExists(__dirname)).toBeTruthy();
    expect(pathExists(__filename)).toBeTruthy();
  });
});

describe("@mongez/fs/existAsync", () => {
  const filePath = initTextFile();

  it("should find the file", async () => {
    expect(await fileExistsAsync(filePath)).toBeTruthy();
  });

  it("should find directory exist", async () => {
    expect(await directoryExistsAsync(__dirname)).toBeTruthy();
  });

  it("should find path exists", async () => {
    expect(await pathExistsAsync(__dirname)).toBeTruthy();
    expect(await pathExistsAsync(__filename)).toBeTruthy();
  });
});

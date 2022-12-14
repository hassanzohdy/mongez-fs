import * as path from "path";
import { getFile } from "./getFile";
import { getJsonFile } from "./getJsonFile";
import { putJsonFile } from "./putJsonFile";
import { unlink } from "./remove";

describe("@mongez/fs/putJsonFile", () => {
  it("should put json content to file", () => {
    const filePath = path.join(__dirname, "test.json");
    const content = { name: "John Doe" };
    putJsonFile(filePath, content);
    expect(getJsonFile(filePath)).toEqual(content);
  });

  it("should put content with 2 spaces", () => {
    const filePath = path.join(__dirname, "test.json");
    const content = { name: "John Doe" };
    putJsonFile(filePath, content, {
      spaces: 2,
    });

    expect(getFile(filePath).length).toEqual(24);
  });

  it("should use replacer", () => {
    const filePath = path.join(__dirname, "test.json");
    const content = { name: "John Doe" };
    putJsonFile(filePath, content, {
      replacer: (key, value) => {
        if (key === "name") {
          return "John";
        }

        return value;
      },
    });

    expect(getJsonFile(filePath)).toEqual({ name: "John" });
  });

  it("should use replacer and spaces", () => {
    const filePath = path.join(__dirname, "test.json");
    const content = { name: "John Doe" };
    putJsonFile(filePath, content, {
      replacer: (key, value) => {
        if (key === "name") {
          return "John";
        }

        return value;
      },
      spaces: 2,
    });

    expect(getJsonFile(filePath)).toEqual({ name: "John" });
    expect(getFile(filePath).length).toEqual(20);
  });

  afterAll(() => {
    const filePath = path.join(__dirname, "test.json");
    unlink(filePath);
  });
});

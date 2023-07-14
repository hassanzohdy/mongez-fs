import { ensureDirectory } from "./makeDirectory";
import { removeDirectory } from "./remove";

describe("@mongez/fs/remove", () => {
  it("should remove empty directory", () => {
    const directory = (__dirname = "my-directory");
    ensureDirectory(directory);

    removeDirectory(directory);
  });

  it("should do nothing if directory does not exist", () => {
    const directory = (__dirname = "my-directory");
    removeDirectory(directory);
  });
});

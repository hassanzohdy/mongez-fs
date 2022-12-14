# Mongez FS

Mongez FS is a `sync` file system for Nodejs that aims to make working with file system easier and more efficient.

## Installation

```bash
npm install @mongez/fs
```

Using Yarn

```bash
yarn add @mongez/fs
```

Using pnpm

```bash
pnpm add @mongez/fs
```

## Usage

All methods are sync, so you can use them in your code without callbacks or promises.

```ts
import { fileExists } from '@mongez/fs';
```

### Copy file or directory

Copy a file or directory to another location.

```ts
import { copyPath } from '@mongez/fs';

copyPath('path/to/file', 'path/to/destination');
```

Alternatively, you can use `copyFile` and `copyDirectory` to copy a file or directory respectively.

### Check if file or directory exists

Check if a path exists

```ts
import { pathExists } from '@mongez/fs';

if (pathExists('path/to/file')) {
    // do something
}
```

Check if a file exists

```ts
import { fileExists } from '@mongez/fs';

if (fileExists('path/to/file')) {
    // do something
}
```

Check if a directory exists

```ts
import { directoryExists } from '@mongez/fs';

if (directoryExists('path/to/directory')) {
    // do something
}
```

### Check if is file

Check if a path is a file

```ts
import { isFile } from '@mongez/fs';

if (isFile('path/to/file')) {
    // do something
}
```

### Check if is directory

Check if a path is a directory

```ts
import { isDirectory } from '@mongez/fs';

if (isDirectory('path/to/directory')) {
    // do something
}
```

> `isDir` is an alias to `isDirectory`

## Get file contents

Get the content of a file

```ts
import { getFile } from '@mongez/fs';

const content = getFile('path/to/file');
```

## Update or create file contents

Put content in a file

```ts
import { putFile } from '@mongez/fs';

putFile('path/to/file', 'content');
```

This function will update or create the file if it doesn't exist.

## Append content to file

Append contents to the end of the file.

```ts
import { appendFile } from '@mongez/fs';

appendFile('path/to/file', 'content');
```

## Prepend content to file

Prepend contents to the beginning of the file.

```ts
import { prependFile } from '@mongez/fs';

prependFile('path/to/file', 'content');
```

## Get json file content

Get the content of a json file and parse it into an object

```ts
import { getJsonFile } from '@mongez/fs';

const content = getJsonFile('path/to/file.json'); // will return an object
```

This function will update or create the file if it doesn't exist.

## Put json to file

Put content in a json file

```ts
import { putJsonFile } from '@mongez/fs';

putJsonFile('path/to/file.json', { key: 'value' });
```

### Get file lines in array

Get the lines of a file line by line in an array

```ts
import { lines } from '@mongez/fs';

const lines: string[] = lines('path/to/file');
```

If the file doesn't exist, an empty array will be returned.

### Remove file or directory

Remove a file or directory

```ts
import { removePath } from '@mongez/fs';

removePath('path/to/file');
```

To remove files you can use `removeFile` or `unlink`

```ts
import { removeFile, unlink } from '@mongez/fs';

removeFile('path/to/file');
unlink('path/to/file');
```

To remove directories you can use `removeDirectory` or `rmdir`

```ts
import { removeDirectory, rmdir } from '@mongez/fs';

removeDirectory('path/to/directory');
rmdir('path/to/directory');
```

### Rename a file or directory

Rename a file or directory

```ts
import { renamePath } from '@mongez/fs';

renamePath('path/to/file', 'path/to/destination');
```

> `renameFile` `renameDirectory` are aliases for `renamePath`

### Move a file or directory

Move a file or directory to another location

```ts
import { movePath } from '@mongez/fs';

movePath('path/to/file', 'path/to/destination');
```

> `moveFile` `moveDirectory` are aliases for `movePath`

### Create New Directory

Create a directory, if the directory exists nothing happens.

```ts
import { makeDirectory } from '@mongez/fs';

makeDirectory('path/to/directory');
```

`mkdir` and `createDirectory` are aliases for `makeDirectory`

> If the directory already exists, it will throw an error.

You can also create a directory recursively

```ts
import { makeDirectory } from '@mongez/fs';

makeDirectory('path/to/directory', {
    recursive: true,
});
```

> By default `recursive` is set to `true`

To set directory permissions, you can use `mode` option

```ts
import { makeDirectory } from '@mongez/fs';

makeDirectory('path/to/directory', {
    mode: 0o777, // this is default mode
});
```

## Ensure Directory Exists

If you want to create the directory only if it doesn't exist, you can use `ensureDirectory`

```ts
import { ensureDirectory } from '@mongez/fs';

ensureDirectory('path/to/directory');
```

This will create the directory if it doesn't exist, otherwise it will do nothing.

### Last Modified Time

Get the last modified date of a file or directory

```ts
import { lastModified } from '@mongez/fs';

const lastModified = lastModified('path/to/file'); // will return a Date object
```

To get last modified time for file, use `fileLastModified`

```ts
import { fileLastModified } from '@mongez/fs';

const lastModified = fileLastModified('path/to/file'); // will return a Date object
```

To get last modified time for directory, use `directoryLastModified`

```ts
import { directoryLastModified } from '@mongez/fs';

const lastModified = directoryLastModified('path/to/directory'); // will return a Date object
```

### File And Directory Size

Get the size of a file or directory in bytes.

```ts
import { pathSize } from '@mongez/fs';

const size = pathSize('path/to/file');
```

To get file size, use `fileSize`

```ts
import { fileSize } from '@mongez/fs';

const size = fileSize('path/to/file');
```

To get directory size, use `directorySize`

```ts
import { directorySize } from '@mongez/fs';

const size = directorySize('path/to/directory');
```

### Get file and directory size in human readable format

Get the size of a file or directory in human readable format.

```ts
import { humanSize } from '@mongez/fs';

const size = humanSize('path/to/file'); // 1.2 KB
```

## Get path stats

Get the [stats](https://nodejs.org/api/fs.html#fsstatsyncpath-options) of a file or directory

```ts
import { stats } from '@mongez/fs';

const stats = stats('path/to/file');
```

The returned stats of the given file is cached, so the next time you call this function with the same path, the cached stats will be returned, if you want to disable the cache and get current stats pass second argument to false.

```ts
import { stats } from '@mongez/fs';

const stats = stats('path/to/file', false);
```

### Get file extension

Get the extension of a file

```ts
import { extension } from '@mongez/fs';

const extension = extension('path/to/file.txt'); // txt
```

### List files and directories in path

List files and directories in a path

```ts
import { list } from '@mongez/fs';

const files = list('path/to/directory');
```

It will return an array contains all files and directories in the given path.

### List files in path

List files only in a path

```ts
import { listFiles } from '@mongez/fs';

const files = listFiles('path/to/directory');
```

It will return an array contains all files in the given path.

### List directories in path

List directories only in a path

```ts
import { listDirectories } from '@mongez/fs';

const directories = listDirectories('path/to/directory');
```

It will return an array contains all directories in the given path.

## Check if path is empty

Check if file is empty

```ts
import { isEmptyFile } from '@mongez/fs';

const isEmpty = isEmptyFile('path/to/file');
```

If the file doesn't exist, it will return true.

You can use `isNotEmptyFile` to check if file is not empty

```ts
import { isNotEmptyFile } from '@mongez/fs';

const isNotEmpty = isNotEmptyFile('path/to/file');
```

Check if directory is empty

```ts
import { isEmptyDirectory } from '@mongez/fs';

const isEmpty = isEmptyDirectory('path/to/directory');
```

If the directory doesn't exist, it will return true.

You can use `isNotEmptyDirectory` to check if directory is not empty

```ts
import { isNotEmptyDirectory } from '@mongez/fs';

const isNotEmpty = isNotEmptyDirectory('path/to/directory');
```

## Testing

To run tests, run the following command

```bash
npm run test
```

## Change Log

- V2.0.0 (14 Dec 2022)
  - Added [empty checks](#check-if-path-is-empty) functions.
  - Added [Append to file](#append-content-to-file) function.
  - Removed `fs-extra` dependency.
  - Added Unit tests

## TODO

- [ ] Complete remaining unit tests.
- [ ] Add async functions.

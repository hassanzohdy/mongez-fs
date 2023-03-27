# Mongez FS

Mongez FS is a `sync` file system for Nodejs that aims to make working with file system easier and more efficient.

## Features

- The package covers all file system operations in simple usage.
- It is sync, so you can use it in your code without callbacks or promises.
- There is also async version of all methods.
- Works with files or directories.

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

## Copy file or directory

Copy a file or directory to another location.

```ts
import { copyPath, copyDirectory, copyFile } from '@mongez/fs';

// copy directory or file
copyPath('path/to/file', 'path/to/destination');

// copy directory
copyDirectory('path/to/directory', 'path/to/destination');

// copy file
copyFile('path/to/file', 'path/to/destination');
```

### Copy file or directory Async

You can use the same methods but with `Async` suffix to copy a file or directory asynchronously.

```ts
import { copyPathAsync, copyDirectoryAsync, copyFileAsync } from '@mongez/fs';

// copy directory or file
await copyPathAsync('path/to/file', 'path/to/destination');

// copy directory
await copyDirectoryAsync('path/to/directory', 'path/to/destination');

// copy file
await copyFileAsync('path/to/file', 'path/to/destination');
```

## Check if file or directory exists

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

### Check if file or directory exists Async

You can use the same methods but with `Async` suffix to check if a path exists asynchronously.

```ts
import { pathExistsAsync } from '@mongez/fs';

if (await pathExistsAsync('path/to/file')) {
    // do something
}
```

Check if a file exists

```ts
import { fileExistsAsync } from '@mongez/fs';

if (await fileExistsAsync('path/to/file')) {
    // do something
}
```

Check if a directory exists

```ts
import { directoryExistsAsync } from '@mongez/fs';

if (await directoryExistsAsync('path/to/directory')) {
    // do something
}
```

## Check if is file

Check if a path is a file

```ts
import { isFile } from '@mongez/fs';

if (isFile('path/to/file')) {
    // do something
}
```

### Check if is file Async

You can use the same methods but with `Async` suffix to check if a path is a file asynchronously.

```ts
import { isFileAsync } from '@mongez/fs';

if (await isFileAsync('path/to/file')) {
    // do something
}
```

## Check if is directory

Check if a path is a directory

```ts
import { isDirectory } from '@mongez/fs';

if (isDirectory('path/to/directory')) {
    // do something
}
```

> `isDir` is an alias to `isDirectory`

### Check if is directory Async

You can use the same methods but with `Async` suffix to check if a path is a directory asynchronously.

```ts
import { isDirectoryAsync } from '@mongez/fs';

if (await isDirectoryAsync('path/to/directory')) {
    // do something
}
```

> `isDirAsync` is an alias to `isDirectoryAsync`

## Get file contents

Get the content of a file

```ts
import { getFile } from '@mongez/fs';

const content = getFile('path/to/file');
```

### Get file contents Async

You can use the same methods but with `Async` suffix to get the content of a file asynchronously.

```ts
import { getFileAsync } from '@mongez/fs';

const content = await getFileAsync('path/to/file');
```

## Touch file

Create a file if it doesn't exist with empty content, otherwise do nothing.

```ts
import { touch } from '@mongez/fs';

touch('path/to/file');
```

### Touch file Async

You can use the same methods but with `Async` suffix to create a file asynchronously.

```ts
import { touchAsync } from '@mongez/fs';

await touchAsync('path/to/file');
```

## Update or create file contents

Put content in a file

```ts
import { putFile } from '@mongez/fs';

putFile('path/to/file', 'content');
```

This function will update or create the file if it doesn't exist.

### Update or create file contents Async

You can use the same methods but with `Async` suffix to put content in a file asynchronously.

```ts
import { putFileAsync } from '@mongez/fs';

await putFileAsync('path/to/file', 'content');
```

## Append content to file

Append contents to the end of the file.

```ts
import { appendFile } from '@mongez/fs';

appendFile('path/to/file', 'content');
```

### Append content to file Async

You can use the same methods but with `Async` suffix to append contents to the end of the file asynchronously.

```ts
import { appendFileAsync } from '@mongez/fs';

await appendFileAsync('path/to/file', 'content');
```

## Prepend content to file

Prepend contents to the beginning of the file.

```ts
import { prependFile } from '@mongez/fs';

prependFile('path/to/file', 'content');
```

### Prepend content to file Async

You can use the same methods but with `Async` suffix to prepend contents to the beginning of the file asynchronously.

```ts
import { prependFileAsync } from '@mongez/fs';

await prependFileAsync('path/to/file', 'content');
```

## Get json file content

Get the content of a json file and parse it into an object

```ts
import { getJsonFile } from '@mongez/fs';

const content = getJsonFile('path/to/file.json'); // will return an object
```

> `jsonFile` is an alias to `getJsonFile`

### Get json file content Async

You can use the same methods but with `Async` suffix to get the content of a json file asynchronously.

```ts
import { getJsonFileAsync } from '@mongez/fs';

const content = await getJsonFileAsync('path/to/file.json'); // will return an object
```

> `jsonFileAsync` is an alias to `getJsonFileAsync`

## Put json to file

Put content in a json file

```ts
import { putJsonFile } from '@mongez/fs';

putJsonFile('path/to/file.json', { key: 'value' });
```

### Put json to file Async

You can use the same methods but with `Async` suffix to put content in a json file asynchronously.

```ts
import { putJsonFileAsync } from '@mongez/fs';

await putJsonFileAsync('path/to/file.json', { key: 'value' });
```

## Get file lines in array

Get the lines of a file line by line in an array

```ts
import { fileLines } from '@mongez/fs';

const lines: string[] = fileLines('path/to/file');
```

If the file doesn't exist, an empty array will be returned.

### Get file lines in array Async

You can use the same methods but with `Async` suffix to get the lines of a file line by line in an array asynchronously.

```ts
import { fileLinesAsync } from '@mongez/fs';

const lines: string[] = await fileLinesAsync('path/to/file');
```

## Remove file or directory

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

### Remove file or directory Async

You can use the same methods but with `Async` suffix to remove a file or directory asynchronously.

```ts
import { removePathAsync, removeFileAsync, unlinkAsync, removeDirectoryAsync, rmdirAsync } from '@mongez/fs';

await removePathAsync('path/to/file');

// files
await removeFileAsync('path/to/file');
await unlinkAsync('path/to/file');

// directories
await removeDirectoryAsync('path/to/directory');
await rmdirAsync('path/to/directory');
```

## Rename a file or directory

Rename a file or directory

```ts
import { renamePath } from '@mongez/fs';

renamePath('path/to/file', 'path/to/destination');
```

> `renameFile` `renameDirectory` are aliases for `renamePath`

### Rename a file or directory Async

You can use the same methods but with `Async` suffix to rename a file or directory asynchronously.

```ts
import { renamePathAsync, renameFileAsync, renameDirectoryAsync } from '@mongez/fs';

await renamePathAsync('path/to/file', 'path/to/destination');

// files
await renameFileAsync('path/to/file', 'path/to/destination');

// directories
await renameDirectoryAsync('path/to/directory', 'path/to/destination');
```

## Move a file or directory

Move a file or directory to another location

```ts
import { movePath } from '@mongez/fs';

movePath('path/to/file', 'path/to/destination');
```

> `moveFile` `moveDirectory` are aliases for `movePath`

### Move a file or directory Async

You can use the same methods but with `Async` suffix to move a file or directory asynchronously.

```ts
import { movePathAsync, moveFileAsync, moveDirectoryAsync } from '@mongez/fs';

await movePathAsync('path/to/file', 'path/to/destination');

// files
await moveFileAsync('path/to/file', 'path/to/destination');

// directories
await moveDirectoryAsync('path/to/directory', 'path/to/destination');
```

## Create New Directory

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

### Create New Directory Async

You can use the same methods but with `Async` suffix to create a directory asynchronously.

```ts
import { makeDirectoryAsync } from '@mongez/fs';

await makeDirectoryAsync('path/to/directory');
```

> If the directory already exists, it will throw an error.

You can also create a directory recursively

```ts
import { makeDirectoryAsync, mkdirAsync, createDirectoryAsync } from '@mongez/fs';

await makeDirectoryAsync('path/to/directory', {
    recursive: true,
});

// or
await mkdirAsync('path/to/directory', {
    recursive: true,
});

// or
await createDirectoryAsync('path/to/directory', {
    recursive: true,
});
```

`mkdirAsync` and `createDirectoryAsync` are aliases for `makeDirectoryAsync`

> By default `recursive` is set to `true`

## Ensure Directory Exists

If you want to create the directory only if it doesn't exist, you can use `ensureDirectory`

```ts
import { ensureDirectory } from '@mongez/fs';

ensureDirectory('path/to/directory');
```

This will create the directory if it doesn't exist, otherwise it will do nothing.

### Ensure Directory Exists Async

You can use the same methods but with `Async` suffix to ensure a directory exists asynchronously.

```ts
import { ensureDirectoryAsync } from '@mongez/fs';

await ensureDirectoryAsync('path/to/directory');
```

## Last Modified Time

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

### Last Modified Time Async

You can use the same methods but with `Async` suffix to get the last modified time asynchronously.

```ts
import { lastModifiedAsync, fileLastModifiedAsync, directoryLastModifiedAsync } from '@mongez/fs';

const lastModified = await lastModifiedAsync('path/to/file'); // will return a Date object

// files
const fileLastModified = await fileLastModifiedAsync('path/to/file'); // will return a Date object

// directories
const directoryLastModified = await directoryLastModifiedAsync('path/to/directory'); // will return a Date object
```

## File And Directory Size

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

### File And Directory Size Async

You can use the same methods but with `Async` suffix to get the size asynchronously.

```ts
import { pathSizeAsync, fileSizeAsync, directorySizeAsync } from '@mongez/fs';

const size = await pathSizeAsync('path/to/file');

// files
const fileSize = await fileSizeAsync('path/to/file');

// directories
const directorySize = await directorySizeAsync('path/to/directory');
```

## Get file and directory size in human readable format

Get the size of a file or directory in human readable format.

```ts
import { humanSize } from '@mongez/fs';

const size = humanSize('path/to/file'); // 1.2 KB
```

### Get file and directory size in human readable format Async

You can use the same methods but with `Async` suffix to get the size in human readable format asynchronously.

```ts
import { humanSizeAsync } from '@mongez/fs';

const size = await humanSizeAsync('path/to/file'); // 1.2 KB
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

### Get path stats Async

You can use the same methods but with `Async` suffix to get the stats asynchronously.

```ts
import { statsAsync } from '@mongez/fs';

const stats = await statsAsync('path/to/file');
```

## Get file extension

Get the extension of a file

```ts
import { extension } from '@mongez/fs';

const extension = extension('path/to/file.txt'); // txt
```

## List files and directories in path

List files and directories in a path

```ts
import { list } from '@mongez/fs';

const files = list('path/to/directory');
```

It will return an array contains all files and directories in the given path.

### List files and directories in path Async

You can use the same methods but with `Async` suffix to list files and directories asynchronously.

```ts
import { listAsync } from '@mongez/fs';

const files = await listAsync('path/to/directory');
```

## List files in path

List files only in a path

```ts
import { listFiles } from '@mongez/fs';

const files = listFiles('path/to/directory');
```

It will return an array contains all files in the given path.

### List files in path Async

You can use the same methods but with `Async` suffix to list files asynchronously.

```ts
import { listFilesAsync } from '@mongez/fs';

const files = await listFilesAsync('path/to/directory');
```

## List directories in path

List directories only in a path

```ts
import { listDirectories } from '@mongez/fs';

const directories = listDirectories('path/to/directory');
```

### List directories in path Async

You can use the same methods but with `Async` suffix to list directories asynchronously.

```ts
import { listDirectoriesAsync } from '@mongez/fs';

const directories = await listDirectoriesAsync('path/to/directory');
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

### Check if path is empty Async

You can use the same methods but with `Async` suffix to check if path is empty asynchronously.

```ts
import { isEmptyFileAsync, isNotEmptyFileAsync, isEmptyDirectoryAsync, isNotEmptyDirectoryAsync } from '@mongez/fs';

const isEmpty = await isEmptyFileAsync('path/to/file');
const isNotEmpty = await isNotEmptyFileAsync('path/to/file');
const isEmpty = await isEmptyDirectoryAsync('path/to/directory');
const isNotEmpty = await isNotEmptyDirectoryAsync('path/to/directory');
```

## Testing

To run tests, run the following command

```bash
npm run test
```

Or using yarn

```bash
yarn test
```

## Change Log

- V3.0.0 (27 Mar 2023)
  - Added `async` functions.
  - Enhanced Unit Testing
- V2.0.0 (14 Dec 2022)
  - Added [empty checks](#check-if-path-is-empty) functions.
  - Added [Append to file](#append-content-to-file) function.
  - Removed `fs-extra` dependency.
  - Added Unit tests

## TODO

- [ ] Complete remaining unit tests.

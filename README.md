# Mongez FS

Mongez FS is a `sync` file system for Nodejs that aims to make working with file system easier and more efficient.

## Installation

```bash
npm install @mongez/fs
```

OR

```bash
yarn add @mongez/fs
```

## Usage

The package is very simple to use, just import the function you want.

All methods are sync, so you can use them in your code without callbacks or promises.

```ts
import { exists } from '@mongez/fs';
```

Any import can be also taken from the default import as well

```ts
import fs from '@mongez/fs';

if (fs.exists('path/to/file')) {
    // do something
}
```

### Copy file or directory

Copy a file or directory to another location.

```ts
import { copy } from '@mongez/fs';

copy('path/to/file', 'path/to/destination');
```

Alternatively, you can use `copyFile` and `copyDirectory` to copy a file or directory respectively.

### Check if file or directory exists

Check if a file exists

```ts
import { exists } from '@mongez/fs';

if (exists('path/to/file')) {
    // do something
}
```

> `fileExists` `directoryExists` and `pathExists` are alias for `exists`

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
import { remove } from '@mongez/fs';

remove('path/to/file');
```

> `removeFile` `unlink` and `unlink` `removeDirectory` are aliases for `remove`

### Rename a file or directory

Rename a file or directory

```ts
import { rename } from '@mongez/fs';

rename('path/to/file', 'path/to/destination');
```

> `renameFile` `renameDirectory` are aliases for `rename`

### Move a file or directory

Move a file or directory to another location

```ts
import { move } from '@mongez/fs';

move('path/to/file', 'path/to/destination');
```

> `moveFile` `moveDirectory` are aliases for `move`

### Create New Directory

Create a directory, if the directory exists nothing happens.

```ts
import { makeDirectory } from '@mongez/fs';

makeDirectory('path/to/directory');
```

> `mkdir` `ensureDirectory` and `createDirectory` are aliases for `makeDirectory`

> `fileSize` and `directorySize` are aliases for `size`

### Last Modified Time

Get the last modified date of a file or directory

```ts
import { lastModified } from '@mongez/fs';

const lastModified = lastModified('path/to/file');
```

> `fileLastModified` and `directoryLastModified` are aliases for `lastModified`

### File And Directory Size

Get the size of a file or directory in bytes.

```ts
import { size } from '@mongez/fs';

const size = size('path/to/file');
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

List files in a path

```ts
import { listFiles } from '@mongez/fs';

const files = listFiles('path/to/directory');
```

It will return an array contains all files in the given path.

### List directories in path

List directories in a path

```ts
import { listDirectories } from '@mongez/fs';

const directories = listDirectories('path/to/directory');
```

It will return an array contains all directories in the given path.

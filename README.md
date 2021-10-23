# path-concator

Tired of replacing double slashes when joining strings? Me too, so I created this package.

## Installation

```bash
npm i path-concator
# or using yarn
yarn add path-concator
```

## Usage

```js
const pathConcator = require('path-concator')

const path = pathConcator.pathConcat('C:\\Users\\Alex\\Desktop\\test', '/vlc.exe');
console.log(path); // outputs: "C:/Users/Alex/Desktop/test/vlc.exe"

const dir = pathConcator.dirConcat('C:\\Users\\Alex\\Desktop\\test', 'myDirectory', '/secret');
console.log(dir); // outputs: "C:/Users/Alex/Desktop/test/myDirectory/secret/"

const url = pathConcator.urlConcat('http://authserver.example.com/', '/api/login');
console.log(url); // outputs: "http://authserver.example.com/api/login/"
```
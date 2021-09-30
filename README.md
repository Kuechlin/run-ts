# run ts

![App](/images/app.png)

    edit and run typescript in browser with direct output

## [Use it Online](https://kuechlin.github.io/run-ts/)

🚨 can only be used in browsers with es module support 🚨

## features

- [monaco editor](https://microsoft.github.io/monaco-editor/)
- typescript intellisense
- typescript type checking
- react support
- import es modules with types
- direct output for every statement
  - any js value
  - await promises and display result | error
  - render react element with styles
- runs directly in browser
- works on mobile

## roadmap

- [x] typescript in browser with monaco editor
- [x] surround statements with log function
- [x] resizable layout
- [x] log promise
- [x] log react component
- [x] import in browser
- [x] preload imports
- [x] show strg+s as button
- [x] save local
- [x] editable theme
- [x] mobile support
- [ ] multiple files
- [ ] import non es modules in browser
- [ ] plugin system

## example code

```typescript
import React from 'react';
import * as R from 'ramda';

// can render react component with style
<h1 style={{ color: '#fff' }}>Hello World</h1>;

// ! don't log output
!"not logged"

const wait = (mil: number, value: any, error?: any) => new Promise((reolve,     reject) => {
    !setTimeout(() => {
        if (error) reject(new Error(error));
        else reolve(value);
    }, mil);
});

// can await promises
wait(1000, 'resolved');

// can await promises and show error
wait(1000, null, 'rejected');

// can render any value
const val = {
    name: "max",
    age: 34,
}
val;

// can render colors
'#123456'

const numbers = ['1', '2', '3', '4', '#', 'a', '5', '6', '7', '8', '9', '0', 'z'];

// can import and use es-modules
// modules and types are loaded from https://unpkg.com
R.pipe(
    R.map<string, number | string>(R.when(v => v === '#', v => v.charCodeAt(0))),
    R.filter(v => !isNaN(+v)),
    R.map(a => +a),
    R.sum
)(numbers)
`
```

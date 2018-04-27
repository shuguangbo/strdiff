Compare two strings and give out difference
===

Usage example
---
### Test Program
```
var sd = require( './strdiff' );

const S0 = "青山遮不住毕竟东流去";
//const S0 = "";
const S1 = "原来青山遮不住，毕竟东流去了";
console.log(JSON.stringify(sd.strdiff(S0,S1)));
```
### Output
```
$ node t.js
[
{"t":"原来","f":false},
{"t":"青山遮不住","f":true,"s":0,"l":5},
{"t":"，","f":false},
{"t":"毕竟东流去","f":true,"s":5,"l":5},
{"t":"了","f":false}
]
```
### Output in JSON Format
```
Return a list of objects, each object indicate a piece of new added text or existing text.
Object keys:
t: string  - text piece of 2nd string
f: boolean - found in first string or not
s: number  - start postion in the first string
l: number  - text length
```

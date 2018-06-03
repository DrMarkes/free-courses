'use strict';

let a = process.argv[2];
let b = process.argv[3];

while (b != 0) {
    c = a % b;
    a = b;
    b = c;
}

console.log(a);

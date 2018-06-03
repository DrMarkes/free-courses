let a = process.argv[2];
let b = process.argv[3];
let result = -1;

if (a.length == b.length) {

    for (var i = 1; i < a.length; i++) {
        a = a.substring(1) + a[0];
        if (a == b) {
            if (a.length - i > i) {
                result = i;
            } else {
                result = a.length - i;
            }
            break;
        }
    }
}

console.log(result);

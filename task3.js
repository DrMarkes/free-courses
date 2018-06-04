var a = process.argv[2];
var b = process.argv[3];
var c = 0;

while (b != 0) {
    c = a % b;
    a = b;
    b = c;
}

process.stdout.write(a);

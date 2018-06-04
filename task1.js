var n = process.argv[2];

var result = n.replace(/[ркн]/gi, '');
process.stdout.write(result);

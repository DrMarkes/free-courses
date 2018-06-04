var a = process.argv[2];
var b = process.argv[3];
var result = -1;

if (a.length == b.length) {
    if (a == b) {
        result = 0;
    } else {
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
    
}

process.stdout.write(result);

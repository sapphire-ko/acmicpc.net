var n = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim());
console.log((Math.pow(n, 3) / 2) + (3 * Math.pow(n, 2) / 2) + n);

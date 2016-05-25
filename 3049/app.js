var n = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim()) - 3;
console.log(1 + (3 / 2) * Math.pow(n, 2) + (3 / 2) * n);

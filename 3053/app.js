var n = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim());
console.log((Math.PI * Math.pow(n, 2)).toFixed(6));
console.log((Math.pow(n * 2, 2) / 2).toFixed(6));

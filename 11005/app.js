var n = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(function(e) { return parseInt(e); });
console.log(n[0].toString(n[1]).toUpperCase());

var str = require('fs').readFileSync('/dev/stdin').toString().trim();
console.log(str.split('').map(function(e, i) { return str.substring(i, str.length); }).sort().join('\n'));

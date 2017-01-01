var a = Array.apply(null, Array(26)).map(function() { return -1; });
require('fs').readFileSync('/dev/stdin').toString().trim().split('').reverse().forEach(function(e, i, l) { a[e.charCodeAt() - 97] = (l.length - 1) - i; });
console.log(a.join(' '));

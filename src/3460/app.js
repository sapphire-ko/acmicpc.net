var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i > 0); }).map(function(e) { return parseInt(e).toString(2).split(''); });
console.log(n.map(function(e) { return e.reverse().map(function(e, i) { return (e === '1' ? i : false); }).filter(function(e) { return (e !== false); }).join(' '); }).join('\n'));

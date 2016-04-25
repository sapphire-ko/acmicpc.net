console.log(Array.apply(null, Array(parseInt(require('fs').readFileSync('/dev/stdin').toString().trim()))).map(function(e, i, a) { return a.map(function() { return '*'; }).join(''); }).join('\n'));

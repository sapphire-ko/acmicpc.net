var t = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(function(e) { return parseInt(e.replace(/6/g, '5')); });
console.log(t.reduce(function(p, c) { return p + c; }, 0) + ' ' + t.map(function(e) { return parseInt(e.toString().replace(/5/g, 6)); }).reduce(function(p, c) { return p + c; }, 0));

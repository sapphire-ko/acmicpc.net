var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
var t = parseInt(s.shift());
var k = s.shift().split(' ').map(function(e) { return parseInt(e); });

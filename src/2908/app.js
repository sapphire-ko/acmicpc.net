console.log(Math.max.apply(Math, require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(function(e) { return parseInt(e.split('').reverse().join('')); })));

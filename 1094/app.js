console.log(parseInt(require('fs').readFileSync('/dev/stdin').toString().trim()).toString(2).split('').reduce(function(prev, curr) { return prev + parseInt(curr); }, 0));

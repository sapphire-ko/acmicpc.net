console.log(parseInt(parseInt(require('fs').readFileSync('/dev/stdin').toString().trim()).toString(2).split('').reverse().join(''), 2));

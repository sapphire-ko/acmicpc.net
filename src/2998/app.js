var str = '00' + require('fs').readFileSync('/dev/stdin').toString().trim();
console.log(str.substring(str.length % 3, str.length).match(/.{3}/g).map(function(e) { return parseInt(e, 2); }).reduce(function(prev, curr) { return prev + curr; }, ''));

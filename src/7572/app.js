var n = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim()) % 60;
var a = 'IJKLABCDEFGH'.split('');
var b = '6789012345'.split('');
console.log(a[n % 12] + b[n % 10]);

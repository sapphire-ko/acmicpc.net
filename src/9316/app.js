var n = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim());
for(var i = 1; i <= n; ++i) {
  console.log('Hello World, Judge ' + i + '!');
}

var a = { '0': 2 };
for(var i = 1; i <= 15; ++i) {
  a[i] = a[i - 1] + (a[i - 1] - 1);
}
console.log(Math.pow(a[require('fs').readFileSync('/dev/stdin').toString().trim()], 2));

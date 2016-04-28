function p(k) {
  var s = 1;
  for(var i = 1; i <= k; ++i) {
    s *= i;
  }
  return s;
}
var a = 'n e\n- -----------';
for(var n = 0; n < 10; ++n) {
  var s = 0;
  for(var i = 0; i <= n; ++i) {
    s += 1 / p(i);
  }
  a += ('\n' + n + ' ');
  if(n < 3) {
    a += s;
  }
  else {
    a += s.toPrecision(10);
  }
}
console.log(a);

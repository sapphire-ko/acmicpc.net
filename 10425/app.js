var a = [[1], [1]];
function f(n) {
  if(a[n] === undefined) {
    var x = f(n - 1);
    var y = f(n - 2);
    var z = [];
    var t = 0;
    for(var i = 0; i < x.length; ++i) {
      var p = x[i];
      var q = y[i];
      p = (p === undefined ? 0 : p);
      q = (q === undefined ? 0 : q);
      var k = t + p + q;
      t = Math.floor(k / 10);
      z.push(k % 10);
    }
    if(t !== 0) {
      z.push(t);
    }
    a.push(z);
  }
  return a[n];
}
console.log(f(499).reverse().join(''));

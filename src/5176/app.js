var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
var n = parseInt(s.shift());
for(var i = 0; i < n; ++i) {
  var l = s.shift().split(' ').map(function(e) { return parseInt(e); });
  var p = l[0];
  var m = l[1];
  var a = {};
  var c = 0;
  for(var j = 0; j < p; ++j) {
    var t = s.shift();
    if(a[t] === undefined) {
      a[t] = true;
    }
    else {
      ++c;
    }
  }
  console.log(c);
}

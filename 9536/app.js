var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
var t = parseInt(n.shift());
for(var i = 0; i < t; ++i) {
  var x = n.shift().split(' ');
  var a = [];
  while(true) {
    var k = n.shift();
    if(k === 'what does the fox say?') {
      break;
    }
    else {
      a.push(k.split(' ')[2]);
    }
  }
  console.log(x.filter(function(e) {
    return (a.indexOf(e) === -1);
  }).join(' '));
}

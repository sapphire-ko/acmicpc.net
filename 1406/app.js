var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').reverse();
var t = s.pop().split('');
s.pop();
var i = t.length;
while(s.length > 0) {
  var x = s.pop().split(' ');
  switch(x[0]) {
  case 'L':
    i = (i === 0 ? i : i - 1);
    break;
  case 'D':
    i = (i === t.length ? i : i + 1);
    break;
  case 'B':
    if(i !== 0) {
      t.splice(i - 1, 1);
      --i;
    }
    break;
  case 'P':
    t.splice(i, 0, x[1]);
    ++i;
    break;
  }
}
console.log(t.join(''));

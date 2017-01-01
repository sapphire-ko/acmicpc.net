var s = require('fs').readFileSync('/dev/stdin').toString().trim();
function c(k) {
  var p = false;
  var s = '';
  k.split('').forEach(function(e) {
    if(e !== '_') {
      s += p ? e.toUpperCase() : e;
    }
    p = (e === '_');
  });
  return s;
}
function j(k) {
  var s = '';
  k.split('').forEach(function(e) {
    if(e.charCodeAt() >= 65 && e.charCodeAt() <= 90) {
      s += '_' + e.toLowerCase();
    }
    else {
      s += e;
    }
  });
  return s;
}
if(s[0].charCodeAt() >= 65 && s[0].charCodeAt() <= 90) {
  console.log('Error!');
}
else {
  if(s.match(/[a-z_]*/)[0].length === s.length) {
    if(s.match(/[_]{2,}/) || s.match(/_$/) || s.match(/^_/)) {
      console.log('Error!');
    }
    else {
      console.log(c(s));
    }
  }
  else if(s.match(/[a-zA-Z]*/)[0].length === s.length) {
    console.log(j(s));
  }
  else {
    console.log('Error!');
  }
}

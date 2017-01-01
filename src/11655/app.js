console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('').map(function(e) {
  var c = e.charCodeAt();
  if(c >= 65 && c <= 90) {
    return String.fromCharCode(65 + ((c - 65) + 13) % 26);
  }
  else if(c >= 97 && c <= 122) {
    return String.fromCharCode(97 + ((c - 97) + 13) % 26);
  }
  else {
    return e;
  }
}).join(''));

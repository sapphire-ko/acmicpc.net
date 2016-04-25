console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('').map(function(e) { var c = e.charCodeAt() - 3; c += (c < 65 ? 26 : 0); return String.fromCharCode(c); }).join(''));

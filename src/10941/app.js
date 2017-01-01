console.log(require('fs').readFileSync('/dev/stdin').toString().trim().match(/.{2}/g).map(function(e) { return String.fromCharCode(parseInt(e, 16)); }).join(''));

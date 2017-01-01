console.log((new Buffer(require('fs').readFileSync('/dev/stdin').toString().trim())).toString('base64'));

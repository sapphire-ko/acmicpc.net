console.log((new Buffer(require('fs').readFileSync('/dev/stdin').toString().trim(), 'base64')).toString('binary'));

var n = require('fs').readFileSync('/dev/stdin').toString().split('\n');
n.shift();
var x = [
  ['how to install ', ''],
  ['what is ', ''],
  ['', ' not working'],
  ['why use ', ''],
  ['who use ', ''],
  ['disadvantages of ', ''],
  ['advantages of ', ''],
  ['', ' open source projects'],
  ['', ' tutorial'],
  ['', ' performance'],
  ['', ' sucks'],
  ['getting started ', ''],
  ['', ''],
  ['', ' reference'],
  ['', ' solution'],
  ['', ' example code'],
  ['difference between ', ' and C++'],
  ['', ' site:acmicpc.net'],
  ['', ' filetype:pdf'],
  ['', ' slides'],
  ['how to make ', ''],
  ['', ' jobs'],
  ['', ' time'],
  ['best os x ', ' app']
];
while(n.length > 0) {
  var a = parseInt(n.shift()) - 1;
  var b = n.shift();
  if(0 <= a && a < 24) {
    console.log(x[a][0] + b + x[a][1]);
  }
  else {
    console.log(b);
  }
}

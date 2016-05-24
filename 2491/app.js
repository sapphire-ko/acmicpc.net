var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ').map(function(e) { return parseInt(e); });
var c_i = 1, c_d = 1;
var m_i = 1, m_d = 1;
for(var i = 1; i < n.length; ++i) {
  if(n[i - 1] <= n[i]) {
    ++c_i;
  }
  else {
    m_i = Math.max(m_i, c_i);
    c_i = 1;
  }
  if(n[i - 1] >= n[i]) {
    ++c_d;
  }
  else {
    m_d = Math.max(m_d, c_d);
    c_d = 1;
  }
}
m_i = Math.max(m_i, c_i);
m_d = Math.max(m_d, c_d);
console.log(Math.max(m_i, m_d));

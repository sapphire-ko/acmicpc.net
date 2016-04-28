var x = '';
for(var i = 1000; i < 10000; ++i) {
  var a = i.toString().split('').reduce(function(prev, curr) { return prev + parseInt(curr); }, 0);
  var b = i.toString(12).split('').reduce(function(prev, curr) { return prev + parseInt(curr, 12); }, 0);
  var c = i.toString(16).split('').reduce(function(prev, curr) { return prev + parseInt(curr, 16); }, 0);

  if(a === b && a === c) {
    x += i + '\n';
  }
}
console.log(x.trim());

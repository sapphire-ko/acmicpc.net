var a = [
  '1967 DavidBowie',
  '1969 SpaceOddity',
  '1970 TheManWhoSoldTheWorld',
  '1971 HunkyDory',
  '1972 TheRiseAndFallOfZiggyStardustAndTheSpidersFromMars',
  '1973 AladdinSane',
  '1973 PinUps',
  '1974 DiamondDogs',
  '1975 YoungAmericans',
  '1976 StationToStation',
  '1977 Low',
  '1977 Heroes',
  '1979 Lodger',
  '1980 ScaryMonstersAndSuperCreeps',
  '1983 LetsDance',
  '1984 Tonight',
  '1987 NeverLetMeDown',
  '1993 BlackTieWhiteNoise',
  '1995 1.Outside',
  '1997 Earthling',
  '1999 Hours',
  '2002 Heathen',
  '2003 Reality',
  '2013 TheNextDay',
  '2016 BlackStar'
].map(function(e) { var x = e.split(' '); x[0] = parseInt(x[0]); return x; });
require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i > 0); }).forEach(function(e) {
  var x = e.split(' ').map(function(e) { return parseInt(e); });
  var q = a.filter(function(e) { return (x[0] <= e[0] && e[0] <= x[1]); });
  console.log(q.length);
  if(q.length > 0) {
    console.log(q.map(function(e) { return e.join(' '); }).join('\n'));
  }
});

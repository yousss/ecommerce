var a = [];
for (var b = 0; b <= 15; b++) a[b] = b.toString(16);
var c = function() {
  var b = '';
  for (var c = 1; c <= 36; c++)
    c === 9 || c === 14 || c === 19 || c === 24
      ? (b += '-')
      : c === 15
        ? (b += 4)
        : c === 20
          ? (b += a[(Math.random() * 4) | 8])
          : (b += a[(Math.random() * 15) | 0]);
  return b;
};
export default c;

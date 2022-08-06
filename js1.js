let a = [1,2];
let b = [1,2,3];
let e = [];

c = a.length < b.length ? b:a;
d = a.length < b.length ? a:b;

console.log(c,d);

function array_equal(c,d) {
  for (var i = 0, n = c.length; i < n; ++i) {
    for (var j = 0, n = c.length; j < n; ++j) {
      if (c[j] == d[i]) {
        continue;
      }
      e.push(c[j]);
    }
  }
    console.log("e=" + e);
}


array_equal(c,d);
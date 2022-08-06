// /<script src="js2.js"></script>


//比較したい配列
var arr1 = ['a', 'b', 'c', 'd', 'e'];
var arr2 = ['a', 'b', 'd', 'e'];
var arr3 = ['b', 'c', 'z','z',1];

//配列内の重複を削除
arr1 = arr1.filter(function (x, i, self) {
	return self.indexOf(x) === i;
});

arr2 = arr2.filter(function (x, i, self) {
	return self.indexOf(x) === i;
});

arr3 = arr3.filter(function (x, i, self) {
	return self.indexOf(x) === i;
});

//配列を1つにまとめる
var arrs = [arr1, arr2, arr3];

var arrsCon = arr1.concat(arr2).concat(arr3);




let arrx = arrsCon.filter(function (val, idx, arr) {
  // 最初に見つかった位置と最後に見つかった位置が一緒であれば
  return arr.indexOf(val) === arr.lastIndexOf(val);
});

//文字列ならシングルクォーテーションを加える
for (var i = 0, n = arrx.length; i < n; ++i) {
  if(isNaN(arrx[i])){
    arrx[i] = "\'" + arrx[i] + "\'";
  }
}


let arr1a = arrx.filter(function (val, idx, arr3) {
  // 最初に見つかった位置と最後に見つかった位置が一緒であれば
  return arr1.indexOf(val) === arrx.indexOf(val);
});
console.log(arr1a);

let arr2a = arrx.filter(function (val, idx, arr3) {
  // 最初に見つかった位置と最後に見つかった位置が一緒であれば
  return arr2.indexOf(val) === arrx.indexOf(val);
});
console.log(arr2a);

let arr3a = arrx.filter(function (val, idx, arr3) {
  // 最初に見つかった位置と最後に見つかった位置が一緒であれば
  return arr3.indexOf(val) === arrx.indexOf(val);
});
console.log(arr3a);

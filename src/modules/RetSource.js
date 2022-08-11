export default class RetSource {
  constructor(x) {
    var RetSource = [];
    // ▼テキスト入力欄に入力された文字列を得て、カンマ記号で分割して配列に得る
    var resArray = document.getElementById(x).value.split(",");
    if (resArray == "") {
      resArray = [];
    };

    // ▼配列1つ1つに対して処理
    for (var i = 0; i < resArray.length; i++) {
      RetSource.push(resArray[i]);
    }
    return RetSource;
  }
}
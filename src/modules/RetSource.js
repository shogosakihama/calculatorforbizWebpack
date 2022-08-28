export default class RetSource {
  constructor(x) {
    var RetSource = [];
    let resArray = [];
    let resArray2 = [];
    // ▼テキスト入力欄に入力された文字列を得て、カンマ記号で分割して配列に得る
    console.log(x);
    resArray = document.getElementById(x).value.indexOf(",");
    if(resArray == 1){
      resArray = document.getElementById(x).value.split(",");
    } else if(resArray== -1){
      resArray = document.getElementById(x).value.split(" ");
    }
  
    console.log(resArray);
    //resArray.sort();

    // ▼配列1つ1つに対して処理
    for (var i = 0; i < resArray.length; i++) {
      RetSource.push(resArray[i]);
    }
    RetSource.sort();
    return RetSource;
  }
}
function AlertSplitByComma() {
    // ▼出力用の変数
    var RetSource1 = [];
    // ▼テキスト入力欄に入力された文字列を得て、カンマ記号で分割して配列に得る
    var resArray1 = document.getElementById('sampleCommaInput1').value.split(",");
    if (resArray1 == "") {
        resArray1 = [];
    };

    // ▼配列1つ1つに対して処理
    for (var i = 0; i < resArray1.length; i++) {
        RetSource1.push(resArray1[i]);
    }


    // ▼出力用の変数
    var RetSource2 = [];
    // ▼テキスト入力欄に入力された文字列を得て、カンマ記号で分割して配列に得る
    var resArray2 = document.getElementById('sampleCommaInput2').value.split(",");
    if (resArray2 == "") {
        resArray2 = [];
    };

    // ▼配列1つ1つに対して処理
    for (var i = 0; i < resArray2.length; i++) {
        RetSource2.push(resArray2[i]);
        console.log(RetSource2);
    }


    // ▼出力用の変数
    var RetSource3 = [];
    // ▼テキスト入力欄に入力された文字列を得て、カンマ記号で分割して配列に得る
    var resArray3 = document.getElementById('sampleCommaInput3').value.split(",");
    if (resArray3 == "") {
        resArray3 = [];
    };

    // ▼配列1つ1つに対して処理
    for (var i = 0; i < resArray3.length; i++) {
        RetSource3.push(resArray3[i]);
        console.log(RetSource3);
    }

    var arr1 = RetSource1;
    var arr2 = RetSource2;
    var arr3 = RetSource3;

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
    //var arrs = [arr1, arr2, arr3];

    var arrsCon = arr1.concat(arr2).concat(arr3);




    let arrx = arrsCon.filter(function (val, idx, arr) {
        // 最初に見つかった位置と最後に見つかった位置が一緒であれば
        return arr.indexOf(val) === arr.lastIndexOf(val);
    });

    //文字列ならシングルクォーテーションを加える
    for (var i = 0, n = arrx.length; i < n; ++i) {
        if (isNaN(arrx[i])) {
            arrx[i] = "\'" + arrx[i] + "\'";
        }
    }


    let arr1a = arr1.filter(function (val, idx, arrx) {
        // 最初に見つかった位置と最後に見つかった位置が一緒であれば
        return arr1.indexOf(val) === arrx.indexOf(val);
    });
    console.log("arr1: " + arr1a);
    if (RetSource1 == ["e", "e"]) {
        console.log("一致");
    }

    let arr2a = arrx.filter(function (val, idx, arr2) {
        // 最初に見つかった位置と最後に見つかった位置が一緒であれば
        return arr2.indexOf(val) === arrx.indexOf(val);
    });
    console.log("arr2: " + arr2a);

    let arr3a = arrx.filter(function (val, idx, arr3) {
        // 最初に見つかった位置と最後に見つかった位置が一緒であれば
        return arr3.indexOf(val) === arrx.indexOf(val);
    });
    console.log("arr3: " + arr3a);

    let h1 = document.getElementById("title");
    h1.textContent = arr3a;

}

import RetSource from './RetSource.js';
window.RetSource = RetSource;
export default class AlertSplitByComma {
    constructor() {

        let input1 = 'sampleCommaInput1';
        let input2 = 'sampleCommaInput2';
        let input3 = 'sampleCommaInput3';
        let RetSource4 = new RetSource(input1);
        let RetSource5 = new RetSource(input2);
        let RetSource6 = new RetSource(input3);
        var arr1 = RetSource4;
        var arr2 = RetSource5;
        var arr3 = RetSource6;

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
}
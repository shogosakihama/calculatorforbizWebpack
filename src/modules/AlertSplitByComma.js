import RetSource from './RetSource.js';
window.RetSource = RetSource;
import DelDouble from './delDouble.js';
export default class AlertSplitByComma {
    constructor() {

        let input1 = 'sampleCommaInput1';
        let input2 = 'sampleCommaInput2';
        let input3 = 'sampleCommaInput3';
        let RetSource4 = new RetSource(input1);
        let RetSource5 = new RetSource(input2);
        let RetSource6 = new RetSource(input3);
    
        //配列内の重複を削除
        RetSource4 = new DelDouble(RetSource4);
        RetSource5 = new DelDouble(RetSource5);
        RetSource6 = new DelDouble(RetSource6);

        //要素を一つに
        let arrsCon = RetSource4.concat(RetSource5).concat(RetSource6);


        let arrx = new DelDouble(arrsCon);
      
        //文字列ならシングルクォーテーションを加える
        for (var i = 0, n = arrx.length; i < n; ++i) {
            if (isNaN(arrx[i])) {
                arrx[i] = "\'" + arrx[i] + "\'";
            }
        }


        let RetSource4a = arrx.filter(function (val, idx, RetSource4) {
            // 最初に見つかった位置と最後に見つかった位置が一緒であれば
            return RetSource4.indexOf(val) === arrx.indexOf(val);
        });
        console.log(RetSource4a);


        let RetSource5a = arrx.filter(function (val, idx, RetSource5) {
            // 最初に見つかった位置と最後に見つかった位置が一緒であれば
            return RetSource5.indexOf(val) === arrx.indexOf(val);
        });
        console.log("RetSource5: " + RetSource5a);

        let RetSource6a = arrx.filter(function (val, idx, RetSource6) {
            // 最初に見つかった位置と最後に見つかった位置が一緒であれば
            return RetSource6.indexOf(val) === arrx.indexOf(val);
        });
        console.log("RetSource6: " + RetSource6a);

        let h1 = document.getElementById("title");
        h1.textContent = arrx;

    }
}
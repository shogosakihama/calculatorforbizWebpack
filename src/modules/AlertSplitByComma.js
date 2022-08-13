import RetSource from './RetSource.js';
window.RetSource = RetSource;
import DelDouble from './delDouble.js';
import ShowDisplay from './showDisplay.js';
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


        //重複しない値だけ残す。
        let arrx = arrsCon.filter(function (val, idx, arr) {
            // 最初に見つかった位置と最後に見つかった位置が一緒であれば
            return arr.indexOf(val) === arr.lastIndexOf(val);
        });

        //文字列ならシングルクォーテーションを加える
        // for (var i = 0, n = arrx.length; i < n; ++i) {
        //     if (isNaN(arrx[i])) {
        //         arrx[i] = "\'" + arrx[i] + "\'";
        //     }
        // }


        let showDisplay1 = new ShowDisplay(RetSource4,arrx);
        let showDisplay2 = new ShowDisplay(RetSource5,arrx);
        let showDisplay3 = new ShowDisplay(RetSource6,arrx);
        console.log(showDisplay1);
        console.log(showDisplay2 );
        console.log(showDisplay3 );

        let h1 = document.getElementById("title");
        h1.textContent = arrx;


        let d1 = document.getElementById("showDisplay1").value = showDisplay1;
        d1.textContent = "⇒ " + showDisplay1;
        let d2 = document.getElementById("showDisplay2").value = showDisplay2;
        d2.textContent = "⇒ " +  showDisplay2;
        let d3 = document.getElementById("showDisplay3").value = showDisplay3;
        d3.textContent = "⇒ " +  showDisplay3;

    }
}
export default class copyToClipboard {
    constructor(url){
       // コピー対象をJavaScript上で変数として定義する
       var copyTarget = document.getElementById(url);

       // コピー対象のテキストを選択する
       copyTarget.select();

       // 選択しているテキストをクリップボードにコピーする
       navigator.clipboard.writeText(copyTarget.value);

    }
}
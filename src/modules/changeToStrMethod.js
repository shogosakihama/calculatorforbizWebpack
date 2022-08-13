export default class changeToStrMethod {
    constructor(url) {
        //文字列ならシングルクォーテーションを加える
        let x =[];
        let l = [];
        let y = "";
        x = document.getElementById(url).value.split(",");
        if (x == "") {
            x = [];
          };
        console.log(x);
        for (var i = 0, n = x.length; i < n; ++i) {
                y = "\'" + x[i] + "\'";
                l.push(y);
        }
        return l;
    }
}

export default class changeToStrMethod {
    constructor(url) {
        //文字列ならシングルクォーテーションを加える
        // let x =[];
        let x ;
        let l = [];
        let y = "";
        x = document.getElementById(url).value.split(",");
        if (x == "") {
            x = [];
          };
        for (var i = 0, n = x.length; i < n; ++i) {
        console.log(x[i]);
            if(x[i].indexOf("\'") != -1){
                continue;
            }
                y = "\'" + x[i] + "\'";
                console.log(y);
                l.push(y);
                console.log(l);
        }
        if(l.length != 0){
            return l;
        }else {
            return x;
        }
    }
}

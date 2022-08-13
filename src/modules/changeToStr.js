import ChangeToStrMethod from './changeToStrMethod.js';
export default class changeToStr {
    constructor(x) {
        let o ;
        for (var i = 0, n = x.length; i < n; ++i) {
            o = new ChangeToStrMethod(x[i]);
            console.log(o);
            document.getElementById(x[i]).value = o;
        }
    }
}

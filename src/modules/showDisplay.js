export default class showDisplay {
    constructor(c,d) {
        let e = [];
        for (var i = 0, n = c.length; i < n; ++i) {
            if (c[i] == d[i]) {
                e.push(c[i]);
            }
        }
        return e;
    }
}
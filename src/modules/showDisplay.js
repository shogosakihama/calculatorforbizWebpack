export default class showDisplay {
    constructor(c, d) {
        let e = [];
        for (var i = 0, n = c.length; i < n; ++i) {
            for (var l = 0, b = d.length; l < b; ++l) {
                if (c[i] == d[l]) {
                    e.push(c[i]);
                }
            }
        }
        return e;
    }
}
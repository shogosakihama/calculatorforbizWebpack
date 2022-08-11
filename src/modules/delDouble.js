export default class delDouble {
    constructor(x) {
       let y = x.filter(function (x, i, self) {
            return self.indexOf(x) === i;
        });
        return y;
    }
}
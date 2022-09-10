export default class InsertNull {
    constructor(arr, arrx) {
        let list = [];
        console.log(arr, arrx);
        let arrt = [];
        arrt = arrx;
        for (let i = 0; i < arr.length; i++) {
            //arr = arr[i].replace(/,/g, "");
            console.log(arr[i]);
            console.log(arrt);
            if (arr[i] == " ") {
                continue;
            }
            for (let l = 0; l < arrt.length; l++) {
                console.log(arrt[l]);
                if (arr[l] == " ") {
                    continue;
                }
                if (arr[i] > arrt[l]) {
                    console.log(arr[i]);
                    list.push(" ");
                    console.log(list);
                }
                list.push(arr[i]);
                console.log(arr[i]);
                console.log(arrt);
                arrt = arrt.filter(n => n !== arr[i]);
                console.log(arrt);
            }
        }
        console.log(list);
        return list;
    }
}
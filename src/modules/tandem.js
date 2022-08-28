export default class Tandem {
    constructor(showDisplay,x) {
        let arr = showDisplay;
        let list;
        let lists = [];
        for (let i = 0; i < arr.length; i++) {
            list = '<li>' + arr[i] + '</li>\n';
            console.log(arr[i]);
            lists.push(list);
        }
        console.log(lists);
        document.getElementById(x).innerHTML = lists;
        let comma = document.getElementById(x).innerHTML;
        comma = comma.replace(/,/g, "");
        console.log(comma);
        document.getElementById(x).innerHTML = comma;

    }
}
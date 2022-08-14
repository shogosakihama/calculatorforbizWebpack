export default class DateToDot{
    constructor(date,format,id){
        if (!format) {
            // デフォルト値
            format = 'YYYY/MM/DD hh:mm:ss'
        }
        
        // フォーマット文字列内のキーワードを日付に置換する
        format = format.replace(/YYYY/g, date.getFullYear()).slice(-8);
        format = format.replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2));
        format = format.replace(/DD/g, ('0' + date.getDate()).slice(-2));
        console.log(format);
        document.getElementById(id).value = format;
        return format;
    }
}
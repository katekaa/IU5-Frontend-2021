/**
 * Напишите функцию capitalize(str),
 * которая вернет строку str, в которой каждое слово начинается с заглавной буквы.
 * Примеры:
 * 'я вижу солнце' -> 'Я Вижу Солнце'
 * 'я Вижу солнце' -> 'Я Вижу Солнце'
 */
function capitalize(str) {    
    let subStr='';
    
    let cap= str.split(' ');
    for (let i=0; i<cap.length; i++){
        subStr += cap[i][0].toUpperCase();
        subStr += cap[i].slice(1) + ' ';      

    }
    return subStr.trim();
}
module.exports = capitalize;
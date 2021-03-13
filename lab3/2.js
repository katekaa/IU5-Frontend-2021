/**
 * Напишите функцию getMinMax(str),
 * на вход в функцию подается строка str
 * числа в строке выделяются пробелами или знаками препинания
 * необходимо найти минимальное и максимальное число в строке
 * вернуть в формате {min: 1, max: 22}
 * Примеры:
 * '4 и -6, 2, 1, может 9, 63, -134 и 566]' -> {min: -134, max: 566}
 */
function getMinMax(str) {
    str.trim();
    let min = null;
    let max = null;    
    let subList = str.split(' ');
    for (let i = 0; i < subList.length; i++){
        subList[i]=parseFloat(subList[i], 10);
        
    }
    let c=0;
    while (!Number.isFinite(subList[c])) {

        c++;
        
    }
    if (c<subList.length) {
        min=subList[c];
        max = subList[c];
        
    }
    for (let i=c+1; i<subList.length; i++){
        if (Number.isFinite(subList[i])){
           
            if (subList[i]<min) {
                min = subList[i];
            }
            if (subList[i]>max){
                max = subList[i];
            }
        }
    }
    const Fmin=min;
    const Fmax=max;
    const text1='min';
    const text2='max';

    return `{max: ${Fmax}, min: ${Fmin}}`;
    }

module.exports = getMinMax;
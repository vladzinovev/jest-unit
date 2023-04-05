//функция, которая возводит число в квадрат
/* const square = (number) => {
    return number*number
} */

const square = (number) => {
    if(number === 1) {
        return 1;
    }
    return Math.pow(number, 2);
}

module.exports = square;

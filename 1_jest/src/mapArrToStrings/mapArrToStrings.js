//функция принимает массив,далле мы должны оставить только числа, а после преобразовать в строку
const mapArrToStrings = (arr) => {
    return arr
        .filter(item => Number.isInteger(item))
        .map(String);
}

module.exports = mapArrToStrings;

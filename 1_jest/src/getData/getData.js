const axios = require('axios');
const mapArrToStrings = require('../mapArrToStrings/mapArrToStrings');

//получаем id через axios запрос и проверяем их на числа с помощью доп функции
const getData = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        const userIds = response.data.map(user => user.id)
        return mapArrToStrings(userIds);
    } catch (e) {

    }
}

module.exports = getData;

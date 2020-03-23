const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=16320e478655d461e93e44ab63f5cc8c&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}
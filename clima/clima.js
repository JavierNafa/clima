const axios = require('axios');

const getClima = async (lat, lon) => {
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=1d7c8a05a3c4769c473d85c27f8f0889`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}
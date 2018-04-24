const axios = require('axios');

const getLugarLatLon = async (direccion) => {

    let encodeUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyAKpxaaRr9MzZlJ3k5fwyUFpuruCt8RWjc`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`)
    }

    let location = resp.data.results[0];
    let coors = location.geometry.location;
    let ciudad = location.formatted_address;
    let lat = coors.lat;
    let lon = coors.lng;

    return {
        direccion: ciudad,
        lat: lat,
        lon: lon
    }
}

module.exports = {
    getLugarLatLon
}
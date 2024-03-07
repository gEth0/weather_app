import sunAnimation from "./animations/sunAnimation.json"
import cloudyFull from "./animations/cloudyFull.json"
import sunCloudy from "./animations/sunCloudy.json"
import thunderstorm from "./animations/thunderstorm.json"
import snow from "./animations/snow.json"
import drizzle from "./animations/drizzle.json"
import rain from "./animations/rain.json"
import mist from "./animations/mist.json"


const searchWeather = async (cityName, setCityName, setWeatherInfo) => {
    if (cityName === "") return setWeatherInfo({ "ERROR": "You must type something" })

    const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    setCityName("")

    fetch(BASE_URL).then((response) => response.json()).then((object) => {

        if (object.cod === "404") return setWeatherInfo({ "ERROR": "City was not found" })
        const data = {
            "city_name": object.name,
            "weather": object.weather[0].main,
            "description": object.weather[0].description,
            "weather_code": object.weather[0].id,
            "temperatures": {
                "temp": object.main.temp,
                "perceived": object.main.feels_like,
                "min": object.main.temp_min,
                "max": object.main.temp_max,
                "hum": `${object.main.humidity}%`
            }
        }

        return setWeatherInfo(data)
    })



}

const getLatitudeAndLong = () => {
    if (navigator.geolocation) {
        var v = navigator.geolocation.getCurrentPosition((pos) => {
            console.log(pos)
            let lat = pos.coords.latitude;
            let long = pos.coords.longitude;
            return { "LAT": lat, "LONG": long };
        })

    }
    return { "ERROR": "Geolocation is not supported" }

}

const searchWeatherByLocation = async (setWeatherInfo) => {

    let coords = getLatitudeAndLong();

    if (coords.ERROR) return setWeatherInfo({ "ERROR": coords.ERROR })

    const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.LAT}&lon=${coords.LONG}&appid=${process.env.REACT_APP_API_KEY}`
    fetch(BASE_URL).then((response) => response.json()).then((object) => {

        if (object.cod === "404") return setWeatherInfo({ "ERROR": "City was not found" })
        const data = {
            "city_name": object.name,
            "weather": object.weather[0].main,
            "description": object.weather[0].description,
            "weather_code": object.weather[0].id,
            "temperatures": {
                "temp": object.main.temp,
                "perceived": object.main.feels_like,
                "min": object.main.temp_min,
                "max": object.main.temp_max,
                "hum": `${object.main.humidity}%`
            }
        }

        return setWeatherInfo(data)
    })

}
const selectAnimation = (code) => {
    switch (true) {
        case (code === 804):
            return cloudyFull;
        case (code === 800):
            return sunAnimation;
        case (code > 800 && code < 804):
            return sunCloudy;
        case (code > 199 && code < 299):
            return thunderstorm.json
        case (code > 599 && code < 699):
            return snow.json
        case (code > 299 && code < 399):
            return drizzle.json
        case (code > 499 && code < 599):
            return rain.json
        case (code > 699 && code < 799):
            return mist.json
        default:
            return
    }
}


export { searchWeather, selectAnimation, searchWeatherByLocation };
import "./WeatherCard.css"
import { selectAnimation } from "./functions"
import Lottie from "lottie-react"
const WeatherCard = ({ weatherInfo }) => {


    if (weatherInfo.ERROR) return <>

        <h2 id="errorLabel">{weatherInfo.ERROR}</h2>

    </>

    return (

        <div className="containerResult">
            <Lottie className="animation" animationData={selectAnimation(weatherInfo.weather_code)}>
            </Lottie>

            <h2 className="gridItem"> <b>City</b> : {weatherInfo.city_name}</h2>
            <p className="gridItem"> <b>Weather</b>  : {weatherInfo.weather}</p>
            <p className="gridItem"> <b>Description</b>  : {weatherInfo.description}</p>
            <p className="gridItem"> <b>Temperature</b> : {weatherInfo.temperatures.temp}°C</p>
            <p className="gridItem"> <b>Feels Like</b>  : {weatherInfo.temperatures.perceived}°C</p>
            <p className="gridItem"> <b>Min</b>  : {weatherInfo.temperatures.min}°C</p>
            <p className="gridItem"> <b>Max</b>  : {weatherInfo.temperatures.max}°C</p>
            <p className="gridItem"> <b>Humidity</b>  : {weatherInfo.temperatures.hum}</p>
        </div>
    )




}
export default WeatherCard;
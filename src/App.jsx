import { useState } from 'react';
import { searchWeather, getLatitudeAndLong } from './functions';
import './App.css';
import WeatherCard from './WeatherCard';

function App() {

  const [cityName, setCityName] = useState("")
  const [weatherInfo, setWeatherInfo] = useState(null)


  return (
    <div className="App">
      <h1 id='title'> <span id='logoW'>W</span>eather App</h1>
      <div className="searchBarContainer" id="containerSearch">
        <input type="text" id="searchBar" value={cityName} placeholder='Type here...' onChange={(e) => { setCityName(e.target.value) }} />
        <button className='button' id="searchButton" onClick={() => searchWeather(cityName, setCityName, setWeatherInfo)}> <b>Search</b> </button>
        <button className='button' id="positionButton" onClick={() => getLatitudeAndLong(setWeatherInfo)}> <b>Position</b> </button>

      </div>
      {weatherInfo && <WeatherCard weatherInfo={weatherInfo} />}

      <footer>

        <div className="footer-social">
          <p> <span id='logoW'>W</span>here can you find me?</p>
          <a href="https://it.fiverr.com/pygabbo" target="_blank" rel="noreferrer"> Fiverr</a>
          <a href="https://github.com/gEth0" target="_blank" rel="noreferrer"> GitHub</a>
          <a href="https://stackoverflow.com/users/19114392/geth0" target="_blank" rel="noreferrer">Stack Overflow</a>

          <div className="footer-text">
            Developed by <span>gEth0</span> <br /> using <a href="https://openweathermap.org/">OpenWeather</a>'s API <br /> Copyright 2023 <br />
            <a href="https://gEth0.github.io/portfolio">gEth0.github.io</a>
          </div>
        </div >
      </footer>
    </div>
  );
}

export default App;

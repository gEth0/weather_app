import { useState } from 'react';
import { searchWeather } from './functions';
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
        <button id="searchButton" onClick={() => searchWeather(cityName, setCityName, setWeatherInfo)}> <b>Search</b> </button>

      </div>
      {weatherInfo && <WeatherCard weatherInfo={weatherInfo} />}
    </div >
  );
}

export default App;

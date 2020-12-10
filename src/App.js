import { useState } from "react";
import axios from "axios";
import { AiOutlineSearch } from "react-icons/ai";
import "./App.css";

function App() {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState("");
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");

  const search = (e) => {
    var keyPress = e.keyCode || e.which;
    if (keyPress === 13) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.REACT_APP_APIKEY}`
        )
        .then((response) => {
          setWeather(response.data);
          setSunrise(
            new Date(response.data.sys.sunrise * 1000).toLocaleTimeString()
          );
          setSunset(
            new Date(response.data.sys.sunset * 1000).toLocaleTimeString()
          );
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const dates = (e) => {
    var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "Nocvember",
      "December",
    ];
    var days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    var day = days[e.getDay()];
    var date = e.getDate();
    var month = months[e.getMonth()];

    return `${day}, ${date} ${month}`;
  };

  return (
    <div className="App">
      <div className="date">{dates(new Date())}</div>

      <div className="search">
        <div className="searchIcon">
          <AiOutlineSearch size={20} />
        </div>
        <input
          className="searchInput"
          type="text"
          placeholder="Enter City"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyPress={(e) => search(e)}
        />
      </div>

      {weather !== "" && (
        <div className="left-section">
          <div className="place">
            {weather.name},{weather.sys.country}
          </div>
          <div className="container">
            <img
              className="icon"
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
              alt="weather img"
            />
            <div className="detailsContainer">
              <div className="temp">{Math.round(weather.main.temp)}°c</div>
              <div className="description">{weather.weather[0].main}</div>
            </div>
          </div>
        </div>
      )}

      {weather !== "" && (
        <div className="gridContainer">
          <div className="item">
            {sunrise}
            <br />
            Sunrise
          </div>
          <div className="item">
            {Math.round(weather.main.feels_like)}°c
            <br />
            Feels like
          </div>
          <div className="item">
            {weather.main.temp_max}°c
            <br />
            High
          </div>
          <div className="item">
            {sunset}
            <br />
            Sunset
          </div>
          <div className="item">
            {weather.wind.speed}mph
            <br />
            Wind Speed
          </div>
          <div className="item">
            {" "}
            {weather.main.temp_min}°c
            <br />
            Low
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

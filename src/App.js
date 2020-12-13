import { useState } from "react";
import axios from "axios";
import "./App.css";

import Searchbar from "./components/Searchbar";
import Weather from "./components/Weather";

const App = () => {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState("");
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");

  const search = (e) => {
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
      <Searchbar
        location={location}
        setLocation={setLocation}
        searchFunction={search}
      />

      {weather !== "" && (
        <Weather weather={weather} sunrise={sunrise} sunset={sunset} />
      )}
    </div>
  );
};

export default App;

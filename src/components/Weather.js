const Weather = (props) => {
  const { weather, sunrise, sunset } = props;

  return (
    <>
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
    </>
  );
};

export default Weather;

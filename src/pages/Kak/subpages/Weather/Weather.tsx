import "./weather.css";
// import { useOutletContext } from "react-router-dom";

const Weather = () => {
  document.title = "Weather";
  // const english = useOutletContext()

  return <></>;
  /* {weather && (
        <div
          style={{ backgroundImage: `url(${backgrounds_sunny[3]})` }}
          className="Weather"
        >
          <main>
            <div className="stats">
              <div className="extra">
                <Winds english={english} wind={weather.wind} />
                <Precipitation
                  english={english}
                  precipitation={weather.precipitation}
                />
                <Visibility english={english} visibility={weather.visibility} />
                <Humidity english={english} humidity={weather.humidity} />
              </div>
              <Temp temp={weather.temp} />
            </div>
            <button onClick={() => setWeather(randomize_weather())}>
              Randomize!
            </button>
          </main>
        </div>
      )} */
};

export default Weather;

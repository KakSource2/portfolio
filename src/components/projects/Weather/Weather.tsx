import "./weather.css";
import { useEffect, useState } from "react";
import Temp from "./components/Temp";
import Precipitation from "./components/Precipitation";
import Humidity from "./components/Humidity";
import Winds from "./components/Winds";
import Visibility from "./components/Visibility";

import background_snowy1 from "./assets/backgrounds/snowy/snow-humid.jpg";
import background_snowy2 from "./assets/backgrounds/snowy/snow-lowvision.jpg";
import background_snowy3 from "./assets/backgrounds/snowy/snow.jpg";
import background_snowy4 from "./assets/backgrounds/snowy/snowing-humid.jpg";
import background_snowy5 from "./assets/backgrounds/snowy/snowing-lowvision-humid.jpg";
import background_snowy6 from "./assets/backgrounds/snowy/snowing-lowvision.jpg";

const backgrounds_snow = [
  background_snowy1,
  background_snowy2,
  background_snowy3,
  background_snowy4,
  background_snowy5,
  background_snowy6,
];

import background_rain from "./assets/backgrounds/rainy/rain-1.jpg";
import background_rain_2 from "./assets/backgrounds/rainy/rain-2.jpg";
import background_rain_3 from "./assets/backgrounds/rainy/rain-3.jpg";

const backgrounds_rain = [
  background_rain,
  background_rain_2,
  background_rain_3,
];

import background_sunny from "./assets/backgrounds/sunny/sunny.jpg";
import background_sunny_1 from "./assets/backgrounds/sunny/sunny (2).jpg";
import background_sunny_2 from "./assets/backgrounds/sunny/sunny (3).jpg";
import background_sunny_3 from "./assets/backgrounds/sunny/sunny (4).jpg";
import background_sunny_4 from "./assets/backgrounds/sunny/sunny (5).jpg";
import background_sunny_5 from "./assets/backgrounds/sunny/sunny (6).jpg";

const backgrounds_sunny = [
  background_sunny,
  background_sunny_1,
  background_sunny_2,
  background_sunny_3,
  background_sunny_4,
  background_sunny_5,
];

import background_partly_cloudy from "./assets/backgrounds/cloudy/partly-cloudy.jpg";
import background_partly_cloudy2 from "./assets/backgrounds/cloudy/partly-cloudy (2).jpg";

const backgrounds_partly_cloudy = [
  background_partly_cloudy,
  background_partly_cloudy2,
];

import background_cloudy from "./assets/backgrounds/cloudy/clouds.jpg";

const backgrounds_cloudy = [background_cloudy];

import background_hailing from "./assets/backgrounds/hailing/hailing.jpg";

const backgrounds_hailing = [background_hailing];

import background_lightning from "./assets/backgrounds/lightning/lightning.jpg";
import Header from "../Header";

const backgrounds_lightning = [background_lightning];

type weather = {
  temp: number;
  precipitation: number;
  humidity: number;
  wind: number;
  visibility: number;
  background: {
    backgroundSize: string;
    backgroundImage: string;
    backgroundPosition: string;
    backgroundColor?: string;
  };
};

const heat_states = [
  {
    state: "Hot",
    temp_min: 29,
    temp_max: 48,
    possibleStates: {
      common: ["Sunny"],
      uncommon: ["Partly Cloudy", "Cloudy", "Rainy"],
      rare: ["Stormy"],
      legendary: ["Hailing"],
    },
  },
  {
    state: "Warm",
    temp_min: 16,
    temp_max: 29,
    possibleStates: {
      common: ["Sunny"],
      uncommon: ["Cloudy", "Rainy"],
      rare: ["Stormy"],
      legendary: ["Hailing"],
    },
  },
  {
    state: "Cold",
    temp_min: 16,
    temp_max: 1,
    possibleStates: {
      common: ["Sunny"],
      uncommon: ["Cloudy", "Rainy"],
      rare: ["Stormy"],
      legendary: ["Hailing"],
    },
  },
  {
    state: "Freezing",
    temp_min: 0,
    temp_max: -48,
    possibleStates: {
      common: ["Sunny"],
      uncommon: ["Cloudy", "Rainy"],
      rare: ["Stormy"],
      legendary: ["Hailing"],
    },
  },
];

type substates = {
  state: string;
  backgrounds: string[];
}[];

const substates: substates = [
  {
    state: "Sunny",
    backgrounds: backgrounds_sunny,
  },
  {
    state: "Partly Cloudy",
    backgrounds: backgrounds_partly_cloudy,
  },
  {
    state: "Cloudy",
    backgrounds: backgrounds_cloudy,
  },
  {
    state: "Rainy",
    backgrounds: backgrounds_rain,
  },
  {
    state: "Snowy",
    backgrounds: backgrounds_snow,
  },
  // {
  //   state: "Sleeting",
  // },
  {
    state: "Lightning",
    backgrounds: backgrounds_lightning,
  },
  // {
  //   state: "Thunderstorm",
  // },
  {
    state: "Hailing",
    backgrounds: backgrounds_hailing,
  },
  // {
  //   state: "Foggy",
  // },
  // {
  //   state: "Icy",
  // },
  // {
  //   state: "Tornado",
  // },
  // {
  //   state: "Rainbow",
  // },
  // {
  //   state: "Clear sky",
  // },
  // {
  //   state: "Windy",
  // },
];

const randomize_weather = () => {
  const create_new_randomized_state = () => {
    return heat_states[Math.floor(Math.random() * heat_states.length)];
  };

  const randomized_state = create_new_randomized_state();

  const create_new_temp = () => {
    let num = randomized_state.temp_max - randomized_state.temp_min;
    return Math.floor(Math.random() * num) + randomized_state.temp_min;
  };
  const newTemp = create_new_temp();

  const create_new_substate = () => {
    let rng = Math.floor(Math.random() * 100);
    if (rng <= 5) {
      let r = Math.floor(
        Math.random() * randomized_state.possibleStates.legendary.length
      );
      return randomized_state.possibleStates.legendary[r];
    }
    if (rng >= 5 && rng <= 15) {
      let r = Math.floor(
        Math.random() * randomized_state.possibleStates.rare.length
      );
      return randomized_state.possibleStates.rare[r];
    }
    if (rng >= 15 && rng <= 35) {
      let r = Math.floor(
        Math.random() * randomized_state.possibleStates.uncommon.length
      );
      return randomized_state.possibleStates.uncommon[r];
    }
    if (rng >= 35 && rng <= 100) {
      let r = Math.floor(
        Math.random() * randomized_state.possibleStates.common.length
      );
      return randomized_state.possibleStates.common[r];
    }
  };

  const newSubState = create_new_substate();

  const create_new_precipitation = () => {
    if (newSubState === "Sunny") {
      return 0;
    }
    if (newSubState === "Partly Cloudy") {
      return Math.floor(Math.random() * 40) + 1;
    }
    if (newSubState === "Cloudy") {
      return Math.floor(Math.random() * 70) + 1;
    }
    if (newSubState === "Rainy") {
      return 70 + Math.floor(Math.random() * 30) + 1;
    }
    if (newSubState === "Stormy") {
      return 70 + Math.floor(Math.random() * 30) + 1;
    }
    return Math.floor(Math.random() * 30);
  };

  const newPrecipitation = create_new_precipitation();

  const create_new_humidity = () => {
    if (newSubState === "Sunny") {
      return Math.floor(Math.random() * 100) + 1;
    }
    if (newSubState === "Partly Cloudy") {
      return 30 + Math.floor(Math.random() * 70) + 1;
    }
    if (newSubState === "Cloudy") {
      return Math.floor(Math.random() * 70) + 1;
    }
    if (newSubState === "Rainy") {
      return 100;
    }
    if (newSubState === "Stormy") {
      return 70 + Math.floor(Math.random() * 30);
    }
    return Math.floor(Math.random() * 100);
  };

  const newHumidity: number = create_new_humidity();

  const create_new_wind = () => {
    if (newSubState === "Sunny") {
      return Math.floor(Math.random() * 47) + 1;
    }
    if (newSubState === "Partly Cloudy") {
      return 30 + Math.floor(Math.random() * 55) + 1;
    }
    if (newSubState === "Cloudy") {
      return Math.floor(Math.random() * 55) + 1;
    }
    if (newSubState === "Rainy") {
      return Math.floor(Math.random() * 60) + 1;
    }
    if (newSubState === "Stormy") {
      return Math.floor(Math.random() * 65) + 1;
    }
    return Math.floor(Math.random() * 40);
  };

  const newWind: number = create_new_wind();

  const create_new_visibility = () => {
    if (newSubState === "Sunny") {
      return 100;
    }
    if (newSubState === "Partly Cloudy") {
      return 70 + Math.floor(Math.random() * 30) + 1;
    }
    if (newSubState === "Cloudy") {
      return Math.floor(Math.random() * 55) + 1;
    }
    if (newSubState === "Rainy") {
      return Math.floor(Math.random() * 60) + 1;
    }
    if (newSubState === "Stormy") {
      return Math.floor(Math.random() * 65) + 1;
    }
    return Math.floor(Math.random() * 40);
  };

  const newVisibility = create_new_visibility();

  const get_background = () => {
    let style = {
      backgroundImage: "",
      backgroundSize: "cover",
      backgroundPosition: "center",
    };
    let find = substates.find((item) => item.state === newSubState);
    if (typeof find === "undefined") return style;

    let r = Math.floor(Math.random() * find.backgrounds.length);
    style.backgroundImage = `url(${find.backgrounds[r]})`;
    return style;
  };

  const newBackground = get_background();

  return {
    temp: newTemp,
    precipitation: newPrecipitation,
    humidity: newHumidity,
    wind: newWind,
    visibility: newVisibility,
    background: newBackground,
  };
};

const Weather = () => {
  const [english, setEnglish] = useState(false);
  const [weather, setWeather] = useState<weather>(randomize_weather());
  document.title = "Weather";

  useEffect(() => {
    const checkLocale = () => {
      const l = localStorage.getItem("language");
      if (l === "english") {
        setEnglish(true);
      }
      if (l === "spanish") {
        setEnglish(false);
      }
    };
    checkLocale();
  }, []);

  const changeLocale = () => {
    if (!english) {
      localStorage.setItem("language", "english");
      setEnglish(true);
    }
    if (english) {
      localStorage.setItem("language", "spanish");
      setEnglish(false);
    }
  };

  return (
    <>
      <Header changeLocale={changeLocale} english={english} />
      <div style={weather.background} className="Weather">
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
    </>
  );
};

export default Weather;

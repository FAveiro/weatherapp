import React, { useState, useContext } from "react";

//* Import icon
import { CloudLightning, MagnifyingGlass } from "@phosphor-icons/react";

//* Import context
import { DataContext } from "../contexts/dataContext";

function Search() {
  const api = {
    base: "https://api.openweathermap.org/data/2.5/weather?",
    key: "df6217cf4720d6cae88930e509eb0983",
  };

  const { setData } = useContext(DataContext);
  const [citySearch, setCitySearch] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    setError("");
    fetch(`${api.base}q=${citySearch}&units=metric&appid=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        if (result.cod === 200) {
          setData({
            name: result.name,
            country: result.sys.country,
            weather: result.weather[0].main,
            icon: result.weather[0].icon,
            temp: result.main.temp,
            tempMax: result.main.temp_max,
            tempMin: result.main.temp_min,
            humity: result.main.humidity,
            windSpeed: result.wind.speed,
          });
        } else if (result.cod >= 400) {
          setError(result.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container_search">
      <div className="title_search">
        <h1>Weather </h1>
        <span>App</span>
      </div>
      <div className="container_search_input">
        <i className="input_icon">
          <CloudLightning size={28} color="#026e92" weight="thin" />
        </i>
        <input
          className="input_search"
          placeholder="Search for location"
          maxLength="20"
          value={citySearch}
          onChange={(e) => setCitySearch(e.target.value)}
        />
        <button className="button_search" onClick={() => handleSubmit()}>
          <MagnifyingGlass size={32} color="black" weight="thin" />
        </button>
      </div>
      {error && <label className="error_search">{error}</label>}
    </div>
  );
}

export default Search;

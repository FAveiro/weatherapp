import React, { useContext } from "react";

//* Import context
import { DataContext } from "../contexts/dataContext";

function MainInformation() {
  const { data } = useContext(DataContext);
  const months = [
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
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const d = new Date();
  const month = months[d.getMonth()];
  const day = days[d.getDay()];
  const time = d.getDate();

  return (
    <div className="container_maininformation">
      <div className="title_maininformation">
        <div className="title_flex_box">
          <h2>{data.name}</h2>
          <h4>{data.country}</h4>
        </div>
        <div>
          <h3>{month}</h3>
          <div className="title_flex_box">
            <h3>{day}</h3>
            <h4>{time}</h4>
          </div>
        </div>
      </div>
      <div className="temp_maininformation">
        <h2>{data.temp}º</h2>
        <div className="temp_flex_box">
          <img src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`} alt="icon" className="icon_weather"/>
          <h3>{data.weather}</h3>
        </div>
      </div>
    </div>
  );
}

export default MainInformation;

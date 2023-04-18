import React, { useContext } from "react";

//* Import context
import { DataContext } from "../contexts/dataContext";

function SideInformation() {
  const { data } = useContext(DataContext);

  return (
    <div className="container_sideinformation">
      <div className="sideinformation_flex_box">
        <h3>Temp Max:</h3>
        <h3>{data.tempMax}º</h3>
      </div>
      <div className="sideinformation_flex_box">
        <h3>Temp Min:</h3>
        <h3>{data.tempMin}º</h3>
      </div>
      <div className="sideinformation_flex_box">
        <h3>Humity:</h3>
        <h3>{data.humity}</h3>
      </div>
      <div className="sideinformation_flex_box">
        <h3>Wind speed:</h3>
        <h3>{data.windSpeed}</h3>
      </div>
    </div>
  );
}

export default SideInformation;

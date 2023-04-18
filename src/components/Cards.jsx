import React, { useContext } from "react";

//* Import components
import MainInformation from "./MainInformation";
import SideInformation from "./SideInformation";

function Cards() {

  return (
    <div className="container_cards">
      <MainInformation />
      <SideInformation />
    </div>
  );
}

export default Cards;

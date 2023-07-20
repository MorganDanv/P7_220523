import React from "react";
import { useParams } from "react-router-dom";
import data from "../../data.json";
// import Slider from "../../components/Slider";
import Accordions from "../../components/Accordions";

function Housing() {
  const { logementId } = useParams();

  const logement = data.find((log) => log.id === logementId);
  console.log(logement);
  return (
    <div>
      {/* {<Slider slides={data.pictures} />} */}
      <Accordions />
    </div>
  );
}

export default Housing;

import React from "react";
import data from "../../data.json";

function Card(title, picture) {
  const dataJson = data;
  const dataJava = JSON.parse(dataJson);

  return (
    <div>
      {data.map((id) => (
        <Card
          key={`${dataJava.id}`}
          picture={dataJava.picture}
          title={dataJava.title}
        />
      ))}
    </div>
  );
}

export default Card;

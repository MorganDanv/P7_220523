import React from "react";
import data from "../../data.json";

function Card(title, picture) {
  const dataJson = data;
  const dataJava = JSON.parse(dataJson);

  return (
    <div>
      {data.map((data) => (
        <Card
          key={`${dataJava.id}`}
          picture={dataJava.cover}
          title={dataJava.title}
        />
      ))}
    </div>
  );
}

export default Card;

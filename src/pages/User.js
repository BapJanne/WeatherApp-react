import React from "react";
import CardCity from "../components/CardCity";
import Navigation from "../components/Navigation";

const User = () => {
  const citiesList = { ...localStorage };

  const resultArray = [];
  for (let city in citiesList) {
    resultArray.push(JSON.parse(citiesList[city]));
  }

  const displayData = () => {
    if (resultArray.length > 0) {
      return resultArray.map((city) => {
        return <CardCity key={city.Key} city={city} />;
      });
    } else {
      return "Il n'y a pas de ville à afficher.";
    }
  };

  return (
    <div>
      <div>{displayData()}</div>
      <Navigation />
    </div>
  );
};

export default User;

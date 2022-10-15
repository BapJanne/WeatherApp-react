import React from "react";
import "./CardCityStorage.css";

const CardCityStorage = (props) => {
  const items = JSON.parse(localStorage.getItem(props.city.city.LocalizedName));
  const addToProfil = (props) => {
    localStorage.setItem(
      props.city.city.LocalizedName,
      JSON.stringify(props.city.city)
    );
  };

  const removeToProfil = (props) => {
    localStorage.removeItem(props.city.city.LocalizedName);
  };

  const displayData = () => {
    if (items !== null) {
      return (
        <div
          className="cardCityStorage"
          onClick={() => {
            removeToProfil(props);
          }}
        >
          Retirer du profil
        </div>
      );
    } else {
      return (
        <div className="cardCityStorage" onClick={() => addToProfil(props)}>
          Ajouter au profil
        </div>
      );
    }
  };

  return <div>{displayData()}</div>;
};

export default CardCityStorage;

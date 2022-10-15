import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1>Weather app</h1>
      <p>
        Sur ce site, vous pourrez rechercher la météo d'une ville en France sur
        5 jours. Application web réalisé avec l'API fourni par AccuWeather.
      </p>
    </div>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import "./CardCity.css";
import CardCityStorage from "./CardCityStorage";

const CardCity = (city) => {
  return (
    <div>
      <div className="cardCity">
        <Link
          className="linkResult"
          to={{
            pathname: `/${city.city.Key}`,
          }}
        >
          {city.city.LocalizedName}
        </Link>
        <CardCityStorage city={city} />
      </div>
    </div>
  );
};

export default CardCity;

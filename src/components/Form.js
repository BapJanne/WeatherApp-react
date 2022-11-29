import React, { useEffect, useState } from "react";
import axios from "axios";
import CardCity from "./CardCity";
import "./Form.css";

const Form = () => {
  const [citiesData, setCitiesData] = useState({});
  const [search, setSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (search) {
        async function fetchData() {
          let response = await axios.get(
            `https://dataservice.accuweather.com/locations/v1/cities/FR/autocomplete?apikey=bytLxjgrYsvwUNI0ifb5e3hJRxZ4jLGw&q=${search}&language=fr-FR`
          );
          setCitiesData(response.data);
        }
        fetchData();
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  const displayData = () => {
    const citiesArray = [];
    if (citiesData.length) {
      for (let key in citiesData) {
        citiesArray.push(citiesData[key]);
      }
      return citiesArray.map((city) => (
        <CardCity key={city.LocalizedName} city={city} />
      ));
    } else {
      return (
        <div>Veuillez rentrer une ville dans la barre des recherches.</div>
      );
    }
  };
  return (
    <div className="form-component">
      <div className="form-container">
        <form>
          <input
            className="search"
            type="text"
            placeholder="Entrez le nom d'une ville..."
            id="search-input"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
      <div className="result">{displayData()}</div>
    </div>
  );
};

export default Form;

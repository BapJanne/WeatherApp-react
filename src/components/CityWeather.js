import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import FirstDayCard from "./FirstDayCard";
import OtherDayCard from "./OtherDayCard";
import "./CityWeather.css";

const CityWeather = (props) => {
  const params = useParams();
  const [cityData, setCityData] = useState([]);
  const [cityName, setCityName] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `http://dataservice.accuweather.com/locations/v1/${params.cityKey}?apikey=bytLxjgrYsvwUNI0ifb5e3hJRxZ4jLGw`
      )
      .then((response) => {
        setCityName(response.data);
      })
      .catch((error) => console.log(error));
  }, [params]);

  useEffect(() => {
    axios
      .get(
        `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${params.cityKey}?apikey=bytLxjgrYsvwUNI0ifb5e3hJRxZ4jLGw&language=fr-FR`
      )
      .then((response) => {
        setCityData(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error.message));
  }, [params]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="cityWeather">
      <div className="cityName">{cityName.LocalizedName}</div>
      <FirstDayCard firstDay={cityData.DailyForecasts[0]} />
      <OtherDayCard otherDay={cityData.DailyForecasts} />
    </div>
  );
};

export default CityWeather;

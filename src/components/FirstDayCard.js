import React from "react";
import "./FirstDayCard.css";

const FirstDayCard = (props) => {
  const tempConverter = (temp) => {
    let result = (temp - 32) / 1.8;
    return Math.round(result);
  };

  return (
    <div className="firstDayContainer">
      <div className="date">Aujourd'hui</div>
      <div className="firstDayWeather">
        <div className="day otherDayCardDay">
          <div>Jour</div>
          <div>
            <img
              src={require(`../weatherIcons/${props.firstDay.Day.Icon}-s.png`)}
              alt="icon"
            />
          </div>
          <div>{props.firstDay.Day.IconPhrase}</div>
        </div>
        <hr className="firstDayHr" />
        <div className="night otherDayCardDay">
          <div>Nuit</div>
          <div>
            <img
              src={require(`../weatherIcons/${props.firstDay.Night.Icon}-s.png`)}
              alt="icon"
            />
          </div>
          <div className="night">{props.firstDay.Night.IconPhrase}</div>
        </div>
      </div>
      <div className="temperatures">
        <div>
          Max : {tempConverter(props.firstDay.Temperature.Maximum.Value)}
          °C
        </div>
        <div className="night">
          Min : {tempConverter(props.firstDay.Temperature.Minimum.Value)}
          °C
        </div>
      </div>
    </div>
  );
};

export default FirstDayCard;

import React from "react";
import "./OtherDayCardComp.css";

const OtherDayCardComp = (props) => {
  const dateFormater = (date) => {
    const [currentDate, time] = date.split("T");
    const [year, month, day] = currentDate.split("-");
    return `${day}/${month}/${year}`;
  };

  const tempConverter = (temp) => {
    let result = (temp - 32) / 1.8;
    return Math.round(result);
  };

  return (
    <div className="otherDay">
      <div className="date">{dateFormater(props.day.Date)}</div>
      <div className="otherDayDay otherDayCardDay">
        <div>Jour</div>
        <div>
          <img
            src={require(`../weatherIcons/${props.day.Day.Icon}-s.png`)}
            alt="icon"
          />
        </div>
        <div>{props.day.Day.IconPhrase}</div>
      </div>
      <hr />
      <div className="otherDayNight otherDayCardDay">
        <div>Nuit</div>
        <div>
          <img
            src={require(`../weatherIcons/${props.day.Night.Icon}-s.png`)}
            alt="icon"
          />
        </div>
        <div>{props.day.Night.IconPhrase}</div>
        <div className="temperatures">
          <div>
            Max : {tempConverter(props.day.Temperature.Maximum.Value)}°C
          </div>
          <div>
            Min : {tempConverter(props.day.Temperature.Minimum.Value)}°C
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherDayCardComp;

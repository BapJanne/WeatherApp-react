import React from "react";
import OtherDayCardComp from "./OtherDayCardComp";
import "./OtherDayCard.css";

const OtherDayCard = (props) => {
  const arraySlice = props.otherDay.slice(1, 5);

  const displayOtherDay = () => {
    return arraySlice.map((day, i) => {
      return <OtherDayCardComp key={i} day={day}></OtherDayCardComp>;
    });
  };

  return <div className="otherDayCard">{displayOtherDay()}</div>;
};

export default OtherDayCard;

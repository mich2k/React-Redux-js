import "./SeasonDisplay.css";
import React from "react";

const getSeason = (lat, month) => {
  if (month >= 3 && month <= 8) {
    if (lat > 0) return "estate";
    else return "inverno";
  } else {
    if (lat > 0) return "inverno";
    else return "estate";
  }
};

// quando accettiamo prop dobbiamo mettere sempre come
// parametro props, ed accedervi attraverso props.lat_prop etc..

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat_prop, new Date().getMonth());
  const icon_api_name =
    "massive " + (season === "inverno" ? "snowflake" : "sun") + " icon";

  // si può anche mettere l icon dentro il className come nel tutorial facendo:
  // className={`${icon_api_name} icon`} così che si sostituisca programmaticamente, ma imo fa schifo

  return (
    <div className={`season-display ${season}`}>
      <i className={`season-display icon-left ${icon_api_name}`}></i>

      <h1>Stagione: {season}</h1>

      <i className={`season-display icon-right ${icon_api_name}`}></i>
    </div>
  );
};

export default SeasonDisplay;

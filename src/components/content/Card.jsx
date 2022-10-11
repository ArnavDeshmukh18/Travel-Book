import React from "react";
import "./Card.css";

export default function Card(props) {

  return (
    <div className="card">
      <img src={props.imageUrl} alt="place" />
      <div className="info">
        <span className="country">{props.location}</span>{" "}
        <a className="mapUrl" href={props.googleMapUrl}>
          View on Google Maps
        </a>
        <h1>{props.title}</h1>
        <p>
          {props.startDate}-{props.endDate}
        </p>
        <p>{props.description}</p>
      </div>
    </div>
  )
  }

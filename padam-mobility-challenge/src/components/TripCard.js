import React from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function TripCard({
  departureStop,
  departureTime,
  arrivalStop,
  arrivalTime,
}) {
  //Formate date in format dd/mm/year and get hours,minutes
  const dateDep = new Date(departureTime).toLocaleDateString("fr");
  const hoursDep = new Date(departureTime).getHours();
  const minutesDep = new Date(departureTime).getMinutes();

  const dateArr = new Date(arrivalTime).toLocaleDateString("fr");
  const hoursArr = new Date(arrivalTime).getHours();
  const minutesArr = new Date(arrivalTime).getMinutes();

  return (
    <div className="m-4 ">
      <Card
        style={{
          display: "flex",
          width: "100%",
        }}
      >
        <Card.Header>
          {" "}
          {dateDep}- {dateArr}
        </Card.Header>
        <Card.Body>
          <Card.Title>
            DÉPART : {departureStop} à {hoursDep}:
            {(minutesDep < 10 ? "0" : "") + minutesDep}
          </Card.Title>
          <Card.Title>
            ARRIVÉE : {arrivalStop} à {hoursArr}:
            {(minutesArr < 10 ? "0" : "") + minutesArr}
          </Card.Title>
          <Button variant="primary">Reserver</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

import React from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./TripCard.css";

export default function TripCard({
  departureStop,
  departureTime,
  arrivalStop,
  arrivalTime,
}) {
  return (
    <div className="m-4 bg-secondary ">
      <Card>
        <Card.Header>20 octobre 05:00 - 23 octobre 05:00</Card.Header>
        <Card.Body>
          <Card.Title>DÉPART : {departureStop}</Card.Title>
          <Card.Title>ARRIVÉE : {arrivalStop}</Card.Title>
          <Button variant="primary">Reserver</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

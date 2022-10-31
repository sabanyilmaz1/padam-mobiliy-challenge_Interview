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
    <div className="m-4 bg-secondary  w-25 ">
      <Card>
        <Card.Header>20 octobre 05:00 - 23 octobre 05:00</Card.Header>
        <Card.Body>
          <Card.Title>De : Bastille</Card.Title>
          <Card.Title>De : Bastille</Card.Title>
          <Button variant="primary">Reserver</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

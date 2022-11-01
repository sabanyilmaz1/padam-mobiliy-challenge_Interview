import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ModalConfirmation from "./ModalConfirmation";

export default function TripCard({
  departureStop,
  departureTime,
  arrivalStop,
  arrivalTime,
  tripId,
}) {
  const [isReserved, setIsReserved] = useState(false);
  const [showModal, setShowModal] = useState(false);

  //Formate date in format dd/mm/year and get hours,minutes
  const dateDep = new Date(departureTime).toLocaleDateString("fr");
  const hoursDep = new Date(departureTime).getHours();
  const minutesDep = new Date(departureTime).getMinutes();

  const dateArr = new Date(arrivalTime).toLocaleDateString("fr");
  const hoursArr = new Date(arrivalTime).getHours();
  const minutesArr = new Date(arrivalTime).getMinutes();

  const bookATrip = (tripId) => {
    let trip = {
      id: tripId,
      departureStop: departureStop,
      departureTime: departureTime,
      arrivalStop: arrivalStop,
      arrivalTime: arrivalTime,
      booked: true,
    };
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(trip),
    };

    fetch(
      `https://6130d11c8066ca0017fdaa97.mockapi.io/book/${tripId}`,
      requestOptions
    ).then((response) =>
      response.json().then((responseJSON) => {
        console.log("avant le if", responseJSON);
        if (responseJSON.success === true) {
          //console.log("dans le if", responseJSON.success);
          setIsReserved(true);
        }
      })
    );
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  if (isReserved === true) {
    console.log("isReserved", `${isReserved} for id:${tripId}`);
  }

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
          <Button
            variant="primary"
            onClick={() => {
              bookATrip(tripId);
              handleShowModal();
            }}
          >
            Reserver
          </Button>
        </Card.Body>
      </Card>
      {isReserved && (
        <ModalConfirmation
          showModal={showModal}
          setShow={setShowModal}
          isReserved={isReserved}
        />
      )}
    </div>
  );
}

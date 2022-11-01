import { useEffect, useState } from "react";

import "./App.css";

import FormStop from "./components/FormStop";
import Trips from "./components/Trips";

function App() {
  const [stops, setStops] = useState([]);
  const [selectedStop, setSelectedStop] = useState(
    "-- Sélectionne un arrêt --"
  );
  const [trips, setTrips] = useState([]);

  const getAllStops = () => {
    fetch("https://6130d11c8066ca0017fdaa97.mockapi.io/stops").then(
      (response) =>
        response.json().then((responseJSON) => setStops(responseJSON))
    );
  };

  const getTripsByDepartureStop = (stop) => {
    const strStop = stop.replaceAll(" ", "%20");
    fetch(
      `https://6130d11c8066ca0017fdaa97.mockapi.io/trips?departureStop=${strStop}`
    ).then((response) =>
      response.json().then((responseJSON) => setTrips(responseJSON))
    );
  };

  const handleChange = (e) => {
    setSelectedStop(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getTripsByDepartureStop(selectedStop);
  };

  useEffect(() => {
    getAllStops();
  }, []);

  return (
    <section className="p-5">
      <h1 className="display-3 text-center">Reservation de trajets</h1>
      <div className="select-container">
        <FormStop
          selectedStop={selectedStop}
          stops={stops}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
      <hr />
      <div>
        <Trips trips={trips} />
      </div>
    </section>
  );
}

export default App;

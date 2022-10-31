import { useEffect, useState } from "react";

import "./App.css";
import Container from "react-bootstrap/Container";

import FormStop from "./components/FormStop";
import Trips from "./components/Trips";

function App() {
  const [stops, setStops] = useState([]);
  const [selectedStop, setSelectedStop] = useState(
    "-- Sélectionne un arrêt --"
  );

  const getAllStops = () => {
    fetch("https://6130d11c8066ca0017fdaa97.mockapi.io/stops").then(
      (response) =>
        response.json().then((responseJSON) => setStops(responseJSON))
    );
  };

  const handleChange = (e) => {
    setSelectedStop(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dans le handleSubmit : ", selectedStop);
  };

  useEffect(() => {
    getAllStops();
  }, []);

  return (
    <section className="p-5">
      <h1 className="display-3">Reservation de trajets</h1>
      <div>
        <FormStop
          selectedStop={selectedStop}
          stops={stops}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
      <div>
        <Trips />
      </div>
    </section>
  );
}

export default App;

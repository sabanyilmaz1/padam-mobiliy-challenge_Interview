import { useEffect, useState } from "react";

import "./App.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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
    <section className="App">
      <h1>Recherche de trajets</h1>
      <Container className="p-3">
        <Form onSubmit={handleSubmit}>
          <Form.Label>Liste des arrêts disponibles</Form.Label>
          <Form.Select
            id="selectStops"
            className="mb-3"
            aria-label="select stops"
            value={selectedStop}
            onChange={(e) => handleChange(e)}
          >
            <option value="default"> -- Sélectionne un arrêt --</option>
            {stops.map((stop, index) => (
              <option value={stop} key={index}>
                {stop}
              </option>
            ))}
          </Form.Select>
          <Button type="submit" variant="primary">
            Rechercher
          </Button>
        </Form>
      </Container>
    </section>
  );
}

export default App;

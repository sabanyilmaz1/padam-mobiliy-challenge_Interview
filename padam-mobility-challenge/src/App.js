import { useEffect, useState } from "react";

import "./App.css";
import Container from "react-bootstrap/Container";

function App() {
  const [stops, setStops] = useState([]);

  const getAllStops = () => {
    fetch("https://6130d11c8066ca0017fdaa97.mockapi.io/stops").then(
      (response) =>
        response.json().then((responseJSON) => setStops(responseJSON))
    );
  };

  useEffect(() => {
    getAllStops();
  });

  return (
    <div className="App">
      <Container className="p-3">
        Recherche de trajets
        <div>
          {stops.map((stop, index) => (
            <div key={index}>{stop}</div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default App;

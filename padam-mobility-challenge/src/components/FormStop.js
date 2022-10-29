import React from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function FormStop({
  selectedStop,
  stops,
  handleSubmit,
  handleChange,
}) {
  return (
    <div>
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
    </div>
  );
}
import React from "react";
import { Button, ButtonToolbar, Card } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

function TravelCard({ data }) {
  return (
    <Card style={{ width: "100%", marginBottom: "5%" }}>
      <Card.Img variant="top" src={data.coverimage} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text className="text-truncate">
          {data.detail}
        </Card.Text>
        <Button variant="primary">More detail</Button>
      </Card.Body>
    </Card>
  );
}

export default TravelCard;

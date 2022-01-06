import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import TravelCard from "./TravelCard";
import "./App.css";

function App() {
  const [attractions, setAttractions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/attractions")
      .then((res) => res.json())
      .then((result) => {
        setAttractions(result);
      });
  }, []); // วงเล็บใช้เพื่อเรียก useEffect ครั้งเดียว

  return (
    <div className="container">
      <Container>
        <Row>
          {attractions.map((attraction) => (
            <Col xs={12} md={6} lg={4} key={attraction.id}>
              <TravelCard data={attraction} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;

import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import Image from "next/image";

function SingleCard(props) {
  return (
    <Col md={12} lg={4} className="pb-4 d-flex">
      <Card className="shadow">
        <Image
          layout="responsive"
          height={235}
          width={360}
          src={props.imageSrc}
          alt={props.alt}
        />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.children}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default SingleCard;

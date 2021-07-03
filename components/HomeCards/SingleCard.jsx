import React from "react";
import { Card, Col } from "react-bootstrap";
import Image from "next/image";
import styles from "../../styles/HomeCards.module.css";

function SingleCard(props) {
  return (
    <Col md={12} lg={4} className="pb-4 d-flex">
      <Card className="shadow">
        <Image
          className={styles.cardImage}
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

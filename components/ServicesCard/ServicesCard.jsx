import React from "react";
import Image from "next/image";
import { Card } from "react-bootstrap";
import styles from "../../styles/ServicesCard.module.css";

function ServicesCard(props) {
  return (
    <Card className={styles.servicesCard}>
      <Card.Body>
        <Card.Title className={styles.servicesHeader}>
          <Image src={props.src} width={32} height={32} alt="Services icon" />{" "}
          <span>{props.title}</span>
        </Card.Title>
        <hr />
        <Card.Text>{props.children}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ServicesCard;

/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Carousel } from "react-bootstrap";
import styles from "../styles/HomeCarousel.module.css";

function HomeCarousel() {
  return (
    <Carousel className="shadow-lg">
      <Carousel.Item>
        <img
          className={styles.carouselImage}
          src="/images/exthinguisher.jpg"
          alt="Fire extinguishers"
        />
        <Carousel.Caption>
          <h3 className={styles.carouselText}>Ochrona przeciwpożarowa</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={styles.carouselImage}
          src="/images/evac.jpg"
          alt="Evacutation signs"
        />
        <Carousel.Caption>
          <h3 className={styles.carouselText}>
            Oznakowanie ewakuacyjne i przeciwpożarowe
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={styles.carouselImage}
          src="/images/workwear-carousell.jpg"
          alt="Workwear"
        />
        <Carousel.Caption>
          <h3 className={styles.carouselText}>Odzież robocza i ochronna</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;

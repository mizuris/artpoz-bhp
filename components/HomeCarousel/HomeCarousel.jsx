import React from "react";
import Image from "next/image";
import { Carousel } from "react-bootstrap";
import styles from "../../styles/HomeCarousel.module.css";
import extinguisher from "../../public/images/exthinguisher.jpg";
import workwear from "../../public/images/workwear-carousell.jpg";
import evacSigns from "../../public/images/evac.jpg";

function HomeCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image
          className={styles.carouselImage}
          src={extinguisher}
          alt="Fire extinguishers"
        />
        <Carousel.Caption>
          <h3>Ochrona przeciwpożarowa</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className={styles.carouselImage}
          src={evacSigns}
          alt="Evacutation signs"
        />
        <Carousel.Caption>
          <h3>Oznakowanie ewakuacyjne i przeciwpożarowe</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className={styles.carouselImage} src={workwear} alt="Workwear" />
        <Carousel.Caption>
          <h3>Odzież robocza i ochronna</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;

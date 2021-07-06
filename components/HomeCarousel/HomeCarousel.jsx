import React from "react";
import Image from "next/image";
import { Carousel } from "react-bootstrap";
import styles from "../../styles/HomeCarousel.module.css";

function HomeCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image
          width={1200}
          height={465}
          layout="responsive"
          src="https://res.cloudinary.com/dlenvpgcq/image/upload/v1625551043/exthinguisher_y6dcq9.jpg"
          alt="Fire extinguishers"
        />
        <Carousel.Caption>
          <h3 className={styles.carouselText}>Ochrona przeciwpożarowa</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          width={1200}
          height={465}
          layout="responsive"
          src="https://res.cloudinary.com/dlenvpgcq/image/upload/v1625551043/evac_mufuld.jpg"
          alt="Evacutation signs"
        />
        <Carousel.Caption>
          <h3 className={styles.carouselText}>
            Oznakowanie ewakuacyjne i przeciwpożarowe
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          width={1200}
          height={465}
          layout="responsive"
          src="https://res.cloudinary.com/dlenvpgcq/image/upload/v1625551046/workwear-carousell_ahcmbn.jpg"
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

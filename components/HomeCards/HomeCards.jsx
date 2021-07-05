import React from "react";
import SingleCard from "./SingleCard";
import firefighter from "../../public/images/firefighter-pl.jpg";
import workwear from "../../public/images/workwear-card-3.jpg";
import signs from "../../public/images/card-3.jpg";
import styles from "../../styles/Home.module.css";

function HomeCards() {
  return (
    <>
      <SingleCard
        imageSrc={firefighter}
        alt="Firefighter"
        title="Ochrona przeciwpożarowa"
      >
        <p className={styles.homeCardText}>
          Doradzamy w sprawach związanych z ochroną przeciwpożarową, oraz
          wyposażamy obiekty w niezbędne urządzenia zgodne z obowiązującymi
          przepisami. Zajmujemy się tworzeniem{" "}
          <strong>Instrukcji Bezpieczeństwa Pożarowego</strong>.
        </p>
      </SingleCard>

      <SingleCard
        imageSrc={workwear}
        alt="Firefighter"
        title="Odzież robocza i ochronna"
      >
        <p className={styles.homeCardText}>
          Oferujemy dostęp do wysokiej jakości odzieży ochronnej i roboczej od
          europejskich producentów. Nasza oferta zaspokaja potrzeby najbardziej
          wymagających klientów z różnych branż.
        </p>
      </SingleCard>

      <SingleCard
        imageSrc={signs}
        alt="Evacuation sings"
        title="Oznakowanie obiektów"
      >
        <p className={styles.homeCardText}>
          Znaki ewakuacyjne, przeciwpożarowe, informacyjne, ostrzegawcze oraz
          specjalne. Zajmujemy się oznakowaniem obiektów zgodnie z wyznaczonymi
          drogami ewakuacyjnymi, rozmieszczeniem urządzeń przeciwpożarowych i
          gaśnic oraz zgodnie z aktualnymi normami.
        </p>
      </SingleCard>
    </>
  );
}

export default HomeCards;

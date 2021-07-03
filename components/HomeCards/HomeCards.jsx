import React from "react";
import SingleCard from "./SingleCard";
import firefighter from "../../public/images/firefighter-pl.jpg";
import workwear from "../../public/images/workwear-card-3.jpg";
import cardImg from "../../public/images/card-3.jpg";

function HomeCards() {
  return (
    <>
      <SingleCard
        imageSrc={firefighter}
        alt="Firefighter"
        title="Ochrona przeciwpożarowa"
      >
        Doradzamy w sprawach związanych z ochroną przeciwpożarową, oraz
        wyposażamy obiekty w niezbędne urządzenia zgodne z obowiązującymi
        przepisami. Zajmujemy się tworzeniem{" "}
        <strong>Instrukcji Bezpieczeństwa Pożarowego</strong>.
      </SingleCard>

      <SingleCard
        imageSrc={workwear}
        alt="Firefighter"
        title="Odzież robocza i ochronna"
      >
        Oferujemy dostęp do wysokiej jakości odzieży ochronnej i roboczej od
        europejskich producentów. Nasza oferta zaspokaja potrzeby najbardziej
        wymagających klientów z różnych branż.
      </SingleCard>

      <SingleCard
        imageSrc={cardImg}
        alt="Evacuation sings"
        title="Oznakowanie obiektów"
      >
        Znaki ewakuacyjne, przeciwpożarowe, informacyjne, ostrzegawcze oraz
        specjalne. Zajmujemy się oznakowaniem obiektów zgodnie z wyznaczonymi
        drogami ewakuacyjnymi, rozmieszczeniem urządzeń przeciwpożarowych i
        gaśnic oraz zgodnie z aktualnymi normami.
      </SingleCard>
    </>
  );
}

export default HomeCards;

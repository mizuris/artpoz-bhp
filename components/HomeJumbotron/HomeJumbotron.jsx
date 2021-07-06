import React from "react";
import Link from "next/link";
import { Jumbotron, Button } from "react-bootstrap";
import styles from "../../styles/HomeJumbotron.module.css";

function HomeJumbotron() {
  return (
    <Jumbotron fluid className={styles.homeJumbotron}>
      <h1 className="display-4">
        <strong>
          <span className={styles.highlight}>BHP i PPOŻ.</span> to nasza
          specjalność
        </strong>
      </h1>
      <p className={styles.lead}>
        Już od 20 lat zapewniamy stały dostęp do artykułów poprawiających
        bezpieczeństwo w Waszej pracy. Dystryubujemy tylko sprawdzone i
        renomowane produkty. Prowadzimy przeglądy okresowe sprzetów
        przeciwpożarowych, szkolenia z zakresu ochorny przeciwpożarowej i wiele
        więcej. Zaufali nam <b>najlepsi</b>, zaufaj i <b>Ty</b>!
      </p>
      <Link href="/kontakt" passHref>
        <Button className={styles.homeButton}>Skontaktuj się</Button>
      </Link>
    </Jumbotron>
  );
}

export default HomeJumbotron;

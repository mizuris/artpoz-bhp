import React from "react";
import Link from "next/link";
import { Jumbotron, Button, Container, Row, Col } from "react-bootstrap";
import styles from "../styles/HomeJumbotron.module.css";

function HomeJumbotron() {
  return (
    <Jumbotron fluid className={styles.homeJumbotron}>
      <Container>
        <h1>
          <strong className={styles.highlight}>BHP i PPOŻ.</strong> to nasza
          specjalność
        </h1>
        <p>
          Już od 20 lat zapewniamy stały dostęp do artykułów poprawiających
          bezpieczeństwo w Waszej pracy. Dystryubujemy tylko sprawdzone i
          renomowane produkty. Prowadzimy przeglądy okresowe sprzetów
          przeciwpożarowych, szkolenia z zakresu ochorny przeciwpożarowej i
          wiele więcej. Zaufali nam <strong>najlepsi</strong>, zaufaj i{" "}
          <strong>Ty</strong>!
        </p>
        <hr />
        <h3>
          Zacznij współpracę{" "}
          <strong className={styles.highlight}>już teraz!</strong>
        </h3>
        <Row className={styles.buttonContainer}>
          <Link href="/kontakt" passHref>
            <Button className={styles.homeButton} variant="danger">
              Skontaktuj się
            </Button>
          </Link>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default HomeJumbotron;

import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import HomeCarousel from "../components/HomeCarousel/HomeCarousel";
import HomeCards from "../components/HomeCards/HomeCards";
import HomeJumbotron from "../components/HomeJumbotron/HomeJumbotron";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Artpoż - hurtownia BHP i ppoż.</title>
          <meta name="description" content="Hurtownia artykułów BHP i ppoż." />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
            integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
            crossOrigin="anonymous"
          />
        </Head>

        <Container>
          <HomeCarousel />
          <Row>
            <Col xs={12}>
              <HomeJumbotron />
            </Col>
          </Row>
          <Row className="pt-4">
            <HomeCards />
          </Row>
        </Container>
      </div>
    </>
  );
}

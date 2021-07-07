import React from "react";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import HomeCarousel from "../components/HomeCarousel";
import HomeJumbotron from "../components/HomeJumbotron";

export default function Home() {
  return (
    <>
      <Head>
        <title>Artpoż - hurtownia BHP i ppoż.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Container fluid className="p-0">
        <HomeCarousel />
      </Container>
      <HomeJumbotron />
    </>
  );
}

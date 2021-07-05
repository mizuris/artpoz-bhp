import React from "react";
import Image from "next/image";
import { Container } from "react-bootstrap";

function ProductsListDivider(props) {
  return (
    <Container fluid className="mb-2">
      <Image src={props.image} alt={props.alt} />
    </Container>
  );
}

export default ProductsListDivider;

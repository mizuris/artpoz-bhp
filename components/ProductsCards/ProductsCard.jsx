import React from "react";
import { Card } from "react-bootstrap";
import ProductHeader from "./ProductHeader";
import Product from "./Product";

function ProductsCard(props) {
  return (
    <Card>
      <Card.Body>
        <ProductHeader
          title={props.title}
          image={props.image}
          alt={props.alt}
        />
        {props.products.map((item) => {
          return <Product key={item} item={item} />;
        })}
      </Card.Body>
    </Card>
  );
}

export default ProductsCard;

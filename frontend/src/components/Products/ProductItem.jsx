import React from "react";
import { Link } from "react-router-dom";

//component
import Ratings from "../Ratings/Ratings";

//styles
import { Card, Button } from "react-bootstrap";

const ProductItem = ({ product }) => {
  const { _id, name, image, rating, numReviews, price } = product;
  return (
    <Card className="my-3 p-3 rounded" key={_id}>
      <Link to={`/product/${_id}`}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title as="div">
            <strong>{name}</strong>
          </Card.Title>
          <Card.Text as="div">
            <div className="my-3">
              <Ratings
                value={rating}
                text={`${numReviews} Reviews`}
                color={"#FADA5E"}
              />
            </div>
          </Card.Text>
          <Card.Text as="h3">£ {price}</Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default ProductItem;

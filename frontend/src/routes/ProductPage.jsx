import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

//styles
import { Row, Col, Image, ListGroup, Button, Card } from "react-bootstrap";

//components
import Ratings from "../components/Ratings/Ratings";

const ProductPage = () => {
  const [product, setProduct] = useState({});
  //get the param
  const params = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(`/api/products/${params._id}`);
      setProduct(response.data);
    };
    fetchProduct();
  }, [params]);

  //destructure
  const { image, name, price, rating, numReviews, description, countInStock } =
    product;
  return (
    <Fragment>
      <Link to="/" className="btn btn-light my-3">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={image} atl={name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Ratings
                value={rating}
                text={`${numReviews} Reviews`}
                color={"#FADA5E"}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: £ {price}</ListGroup.Item>
            <ListGroup.Item>Description: {description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>£ {price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Stock</Col>
                  <Col>{countInStock > 0 ? "In Stock" : "Out Of Stock"}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Button
                    className="btn-block"
                    type="button"
                    disabled={countInStock === 0}
                  >
                    Add To Cart
                  </Button>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default ProductPage;

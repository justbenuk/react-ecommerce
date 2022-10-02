import React, { useState, useEffect } from "react";
import axios from "axios";

//components
import ProductItem from "../components/Products/ProductItem";

//style
import { Row, Col } from "react-bootstrap";

const HomePage = () => {
  //set the products
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("/api/products");
      setProductList(response.data);
    };

    fetchProducts();
  }, []);
  return (
    <Row>
      <h1>Latest Products</h1>
      {productList.map((product) => (
        <Col sm={4} md={6} lg={4} xl={3} key={product._id}>
          <ProductItem product={product} />
        </Col>
      ))}
    </Row>
  );
};

export default HomePage;

//core
import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

//components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

//pages
import HomePage from "./routes/HomePage";
import ProductPage from "./routes/ProductPage";

//styles
import { Container } from "react-bootstrap";

function App() {
  return (
    <Fragment>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/product/:_id" element={<ProductPage />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;

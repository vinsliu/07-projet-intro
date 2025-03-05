import Header from "./components/Header";
import Footer from "./components/Footer";
import Dish from "./components/Dish";
import "./App.scss";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useState } from "react";

function App() {
  const dishes = [
    {
      id: 1,
      name: "Tacos à l’unité",
      image:
        "https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg",
      price: 3,
      isNew: true,
      stock: 12,
    },
    {
      id: 2,
      name: "Enchiladas",
      image:
        "https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg",
      price: 12,
      stock: 0,
    },
    {
      id: 3,
      name: "Mole poblano",
      image:
        "https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg",
      price: 15,
      stock: 5,
    },
  ];

  const [showNewOnly, setShowNewOnly] = useState(false);

  const handleShowNewOnly = () => {
    setShowNewOnly((state) => !state);
  };

  const filteredDishes = dishes.filter(
    (dish) => dish.stock > 0 && (!showNewOnly || dish.isNew)
  );

  return (
    <>
      <Header />
      <main>
        <Container>
          <Button onClick={handleShowNewOnly} className="mb-2">
            {!showNewOnly ? "Nouveautés uniquement" : "Vois tous les plats"}
          </Button>
          <Row>
            {filteredDishes.map((dish) => (
              <Col md={4} key={dish.id}>
                <Dish
                  image={dish.image}
                  name={dish.name}
                  price={dish.price}
                  isNew={dish.isNew}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;

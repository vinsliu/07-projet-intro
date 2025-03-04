import Header from "./components/Header";
import Footer from "./components/Footer";
import Dish from "./components/Dish";
import "./App.scss";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  const dishes = [
    {
      id: 1,
      name: "Tacos à l’unité",
      image:
        "https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg",
      price: "3",
      isNew: true,
    },
    {
      id: 2,
      name: "Enchiladas",
      image:
        "https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg",
      price: "12",
    },
    {
      id: 3,
      name: "Mole poblano",
      image:
        "https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg",
      price: "15",
    },
  ];

  return (
    <>
      <Header />
      <main>
        <Container>
          <Row>
            {dishes.map((dish) => (
              <Col md={4}>
                <Dish
                  key={dish.id}
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

import { Card, Badge, Button } from "react-bootstrap";
import "../assets/scss/dish.scss";
import { useContext } from "react";
import CartContext from "../context/CartContext";

function Dish({ image, name, price, isNew = false }) {
  const { addToCart } = useContext(CartContext);
  return (
    <Card className="Card">
      <Card.Img variant="top" src={image} alt={name} />
      {isNew === true && <Badge>Nouveau</Badge>}
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{price}€</Card.Text>
        <Button variant="primary" onClick={addToCart}>
          Ajouter au panier
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Dish;

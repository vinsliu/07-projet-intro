import { Card, Badge, Button } from "react-bootstrap";
import "../assets/scss/dish.scss";
import useCart from "../hooks/useCart";

function Dish({ image, name, price, isNew = false }) {
  const { increment, decrement } = useCart();
  return (
    <Card className="Card">
      <Card.Img variant="top" src={image} alt={name} />
      {isNew === true && <Badge>Nouveau</Badge>}
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{price}€</Card.Text>
        <Button variant="primary" onClick={increment} className="me-2">
          Ajouter au panier
        </Button>
        <Button variant="primary" onClick={decrement}>
          Retirer du panier
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Dish;

import { Card, Badge } from "react-bootstrap";
import "../assets/scss/dish.scss";

function Dish({ image, name, price, isNew = false }) {
  return (
    <Card className="Card">
      <Card.Img variant="top" src={image} alt={name} />
      {isNew === true ? <Badge>Nouveau</Badge> : ""}
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Dish;

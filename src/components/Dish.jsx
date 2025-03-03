function Dish({ image, name, price }) {
  return (
    <div>
      <img src={image} alt="image" />
      <h3>{name}</h3>
      <span>{price}</span>
    </div>
  );
}
export default Dish;

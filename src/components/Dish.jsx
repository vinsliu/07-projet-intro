function Dish({ image, name, price }) {
  return (
    <article>
      <img src={image} alt="image" />
      <h3>{name}</h3>
      <span>{price}</span>
    </article>
  );
}
export default Dish;

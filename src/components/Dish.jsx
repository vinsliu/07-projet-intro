function Dish({ image, name, price }) {
  return (
    <>
      <img src={image} alt="image" />
      <h3>{name}</h3>
      <span>{price}</span>
      <br></br>
    </>
  );
}
export default Dish;

import { useContext } from "react";
import CartContext from "../context/CartContext";

const useCart = () => {
  const { cartCount, dispatch } = useContext(CartContext);
  const increment = () => dispatch({ type: "increment" });
  const decrement = () => dispatch({ type: "decrement" });
  return { cartCount, increment, decrement };
};

export default useCart;
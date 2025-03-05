import { createContext, useReducer } from "react";
import cartReducer, { initialState } from "../reducers/cartReducer";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cartCount: state.count, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;

export const initialState = { count: 0 };

const cartReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: Math.max(state.count - 1, 0) };
  }
};

export default cartReducer;

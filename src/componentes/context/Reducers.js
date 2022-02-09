export const cartReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, indicadores: action.value };
    case "SIMULACAO":
      return {
        ...state,
        simulador: {
          tipoIndex: action.value.tipoIndex,
          rendimento: action.value.rendimento,
        },
      };
    case "CHANGE_CART_QTY":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };
    case "UPDATE_PRODUCTS":
      return { ...state, products: action.value };
    default:
      return state;
  }
};

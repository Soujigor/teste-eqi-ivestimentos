import { createContext, useContext, useReducer, useEffect } from "react";
import { cartReducer } from "./Reducers";

const Cart = createContext();

const Context = ({ children }) => {
  useEffect(() => {
    async function fetchIndicadores() {
      const response = await fetch("http://localhost:3000/indicadores");
      const data = await response.json();
      dispatch({ type: "LOADING", value: data });
    }
    fetchIndicadores();
  }, []);

  const [state, dispatch] = useReducer(cartReducer, {
    indicadores: [],
    simulador: { tipoIndex: "", rendimento: "" },
  });

  useEffect(() => {
    async function fetchSimulacao(tipoIndex, rendimento) {
      const response = await fetch(
        `http://localhost:3000/simulacoes?tipoIndexacao=${tipoIndex}&tipoRendimento=${rendimento}`
      );
      const data = await response.json();
      console.log(data);
    }
    if (
      state.simulador.rendimento.trim() !== "" &&
      state.simulador.tipoIndex.trim() !== ""
    ) {
      fetchSimulacao(state.simulador.tipoIndex, state.simulador.rendimento);
      console.log("oi");
    }
  }, [state.simulador.tipoIndex, state.simulador.rendimento]);

  console.log(state);

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;

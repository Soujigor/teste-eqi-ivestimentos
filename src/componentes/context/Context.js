import { createContext, useContext, useReducer, useEffect } from "react";
import { cartReducer, inputsReducer } from "./Reducers";

const Cart = createContext();

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    indicadores: [],
    simular: { tipoIndex: "", rendimento: "" },
    resultado: {}
  });

  const [inputsState, inputsDispatch] = useReducer(inputsReducer, {
    aporteInicial: '',
    prazo: '',
    ipca: '',
    aporteMensal: '',
    rentabilidade: '',
    cdi: '',
  })

  useEffect(() => {
    async function fetchIndicadores() {
      const response = await fetch("http://localhost:3000/indicadores");
      const data = await response.json();
      
      dispatch({ type: "LOADING", value: data });
      inputsDispatch({ type: "LOADING", value: {
        ipca: data[0].valor,
        cdi: data[1].valor
      }});
    }
    fetchIndicadores();
  }, []);

  useEffect(() => {
    async function fetchSimulacao(tipoIndex, rendimento) {
      const response = await fetch(
        `http://localhost:3000/simulacoes?tipoIndexacao=${tipoIndex}&tipoRendimento=${rendimento}`
      );
      const data = await response.json();
      dispatch({type: 'RESULTADO', value: data})
    }
    if (
      state.simular.rendimento.trim() !== "" &&
      state.simular.tipoIndex.trim() !== ""
    ) {
      fetchSimulacao(state.simular.tipoIndex, state.simular.rendimento);
    }
  }, [state.simular.tipoIndex, state.simular.rendimento]);

  return <Cart.Provider value={{ state, dispatch, inputsState, inputsDispatch }}>{children}</Cart.Provider>;
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;

import { createContext, useContext, useReducer } from "react";
import { simulationReducer } from "./Reducers";

const Simulation = createContext();

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(simulationReducer, {
    indicadores: [],
    simular: { tipoIndex: "", rendimento: "" },
    resultado: {},
  });

  return (
    <Simulation.Provider value={{ state, dispatch }}>
      {children}
    </Simulation.Provider>
  );
};

export const SimulationState = () => {
  return useContext(Simulation);
};

export default Context;

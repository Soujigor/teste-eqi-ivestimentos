export const simulationReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, indicadores: action.value };
    case "SIMULAR":
      return {
        ...state,
        simular: {
          tipoIndex: action.value.tipoIndex,
          rendimento: action.value.rendimento,
        },
      };
    case "RESULTADO":
      return {
        ...state,
        resultado: { ...action.value[0] },
      };
    case "LIMPAR":
      return {
        indicadores: ["", ""],
        simular: { tipoIndex: "", rendimento: "" },
        resultado: {},
      };
    default:
      return state;
  }
};


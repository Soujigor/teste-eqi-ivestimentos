import React, { useEffect } from "react";
import { Stack, GridItem, Spinner } from "@chakra-ui/react";
import Header from "./Header";
import Simulador from "./Simulador";
import Resultado from "./Resultado";
import { SimulationState } from "../componentes/context/Context";
import useFetch from "./hooks/useFetch";

const Main = () => {
  const {
    state: { simular },
    dispatch,
  } = SimulationState();
  const url = `http://localhost:3000/simulacoes?tipoIndexacao=${simular.tipoIndex}&tipoRendimento=${simular.rendimento}`;

  const { loadedData, loading } = useFetch("http://localhost:3000/indicadores");
  const { loadedData: data, loading: loadingGraph } = useFetch(url);

  useEffect(() => {
    if (loadedData) {
      dispatch({ type: "LOADING", value: loadedData });
    }
  }, [loadedData, dispatch]);

  useEffect(() => {
    if (simular.rendimento !== "" && simular.tipoIndex !== "") {
      
      dispatch({ type: "RESULTADO", value: data });
    }
  }, [dispatch, data, simular.tipoIndex, simular.rendimento]);

  return (
    <Stack gap={10}>
      <GridItem colStart={1} colEnd={-1} pt={10}>
        <Header />
      </GridItem>
      <Stack
        direction={["column", "row"]}
        templateRows="75px 560px"
        templateColumns="1fr 1fr"
        gap={5}
        padding={10}
      >
        <GridItem>{loading ? <Spinner size="xl" /> : <Simulador />}</GridItem>
        <GridItem colStart={[1, 2]} paddingRight={5}>
          {loadingGraph && !loading && (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="#EC8C54"
              size='xl'
            />
          )}
          {simular.rendimento && !loadingGraph && <Resultado />}
        </GridItem>
      </Stack>
    </Stack>
  );
};

export default Main;

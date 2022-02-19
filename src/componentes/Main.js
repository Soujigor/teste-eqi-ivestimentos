import React, { useEffect } from "react";
import { Box, Spinner, SimpleGrid, Flex } from "@chakra-ui/react";
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
    <SimpleGrid
      justifyContent="center"
      pt={10}
      gridTemplateColumns="repeat(auto-fit, minmax(400px, 600px))"
    >
      <Box pb="60px" pr="30px">
        {loading ? <Spinner size="xl" /> : <Simulador />}
      </Box>

      <Flex paddingRight={5} width="100%" justify="center" heigth="100%">
        {loadingGraph && !loading && (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="#EC8C54"
            size="xl"
            mt="200px"
          />
        )}
        {simular.rendimento && !loadingGraph && <Resultado />}
      </Flex>
    </SimpleGrid>
  );
};

export default Main;

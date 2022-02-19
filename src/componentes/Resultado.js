import React from "react";
import { Box, Grid, Flex, Text } from "@chakra-ui/react";
import ResultadoCard from "./ResultadoCard";
import { SimulationState } from "../componentes/context/Context";
import Grafico from "./Grafico";
const Resultado = () => {
  const { state } = SimulationState();

  return (
    <Flex
      paddingBottom={1}
      rounded="lg"
      fontFamily="Helvetica"
      fontWeight="normal"
      fontSize="14px"
      w="100%"
      direction="column"
    >
      <Text h="20px" fontSize="18px" fontWeight="bold" mb="30px">
        Resultado da Simulação
      </Text>
      <Grid
        gridTemplateColumns="repeat(auto-fit, minmax(10px, 186px))"
        w="100%"
        justifyContent="center"
        gap="10px"
      >
        <ResultadoCard
          text="Valor final Bruto"
          value={`R$ ${state.resultado.valorFinalBruto}`}
        />
        <ResultadoCard
          text="Alíquota do IR"
          value={`${state.resultado.aliquotaIR}%`}
        />
        <ResultadoCard
          text="Valor Pago em IR"
          value={`R$ ${state.resultado.valorPagoIR}`}
        />
        <ResultadoCard
          text="Valor Final Líquido"
          color="green"
          value={`R$ ${state.resultado.valorFinalLiquido}`}
        />
        <ResultadoCard
          text="Valor Total Investido"
          value={`R$ ${state.resultado.valorTotalInvestido}`}
        />
        <ResultadoCard
          text="Ganho Líquido"
          color="green"
          value={`R$ ${state.resultado.ganhoLiquido}`}
        />
      </Grid>
      <Box colStart={1} colEnd={-1} h="350px">
        <Grafico />
      </Box>
    </Flex>
  );
};

export default Resultado;

import React from "react";
import { SimpleGrid, Box, GridItem, Grid } from "@chakra-ui/react";
import ResultadoCard from "./ResultadoCard";
import { CartState } from "../componentes/context/Context";
import Grafico from "./Grafico";
const Resultado = () => {
  const { state } = CartState();

  return (
    <Grid templateColumns='repeat(3, 1fr)' spacing="10" paddingBottom={1} textAlign="center" rounded="lg">
      <GridItem
        h="20px"
        align-items="flex-start"
        colStart={1}
        colEnd={-1}
                fontWeight="bold"
      >
        Resultado da Simulação
      </GridItem>
      <ResultadoCard
        text="Valor final Bruto"
        value={state.resultado.valorFinalBruto}
      />
      <ResultadoCard text="Alíquota do IR" value={state.resultado.aliquotaIR} />
      <ResultadoCard
        text="Valor Pago em IR"
        value={state.resultado.valorPagoIR}
      />
      <ResultadoCard
        text="Valor Final Líquido"
        color='green'
        value={state.resultado.valorFinalLiquido}
      />
      <ResultadoCard
        text="Valor Total Investido"
        value={state.resultado.valorTotalInvestido}
      />
      <ResultadoCard
        text="Ganho Líquido"
        color='green'
        value={state.resultado.ganhoLiquido}
      />
      <GridItem colStart={1} colEnd={-1} h="350px">
        <Grafico />
      </GridItem>
    </Grid>
  );
};

export default Resultado;

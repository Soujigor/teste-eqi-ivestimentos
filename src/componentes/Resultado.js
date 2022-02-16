import React from "react";
import { GridItem, Grid } from "@chakra-ui/react";
import ResultadoCard from "./ResultadoCard";
import { CartState } from "../componentes/context/Context";
import Grafico from "./Grafico";
const Resultado = () => {
  const { state } = CartState();

  return (
    <Grid
      templateColumns="repeat(3, 1fr)"
      spacing="10"
      paddingBottom={1}
      textAlign="center"
      rounded="lg"
      fontFamily="Helvetica"
      fontWeight="normal"
      fontSize="14px"
    >
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
        value={`R$ ${state.resultado.valorFinalBruto}`}
      />
      <ResultadoCard text="Alíquota do IR" value={`${state.resultado.aliquotaIR}%`} />
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
      <GridItem colStart={1} colEnd={-1} h="350px">
        <Grafico />
      </GridItem>
    </Grid>
  );
};

export default Resultado;

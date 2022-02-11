import React from "react";
import { SimpleGrid, Box } from "@chakra-ui/react";
import ResultadoCard from "./ResultadoCard";
import { CartState } from "../componentes/context/Context";
import Grafico from "./Grafico";
const Resultado = () => {
  const { state } = CartState();

  return (
    <SimpleGrid columns={3} spacing="8" p="10" textAlign="center" rounded="lg">
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
        value={state.resultado.valorFinalLiquido}
      />
      <ResultadoCard
        text="Valor Total Investido"
        value={state.resultado.valorTotalInvestido}
      />
      <ResultadoCard
        text="Ganho Líquido"
        value={state.resultado.ganhoLiquido}
      />
      <Box w="580px" h="400px">
        <Grafico />
      </Box>
    </SimpleGrid>
  );
};

export default Resultado;

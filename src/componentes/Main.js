import React from "react";
import { Stack, GridItem } from "@chakra-ui/react";
import Header from "./Header";
import Simulador from "./Simulador";
import Resultado from "./Resultado";
import { CartState } from "../componentes/context/Context";

const Main = () => {
  const {
    state: { simular },
  } = CartState();
  return (
    <Stack gap={10}>
      <GridItem colStart={1} colEnd={-1}>
        <Header />
      </GridItem>
      <Stack
        direction={["column", "row"]}
        templateRows="75px 560px"
        templateColumns="1fr 1fr"
        gap={5}
      >
        <GridItem>
          <Simulador />
        </GridItem>
        <GridItem>{simular.rendimento && <Resultado />}</GridItem>
      </Stack>
    </Stack>
  );
};

export default Main;

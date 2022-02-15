import React from "react";
import { Grid, GridItem, Flex } from "@chakra-ui/react";
import Header from "./Header";
import Simulador from "./Simulador";
import Resultado from "./Resultado";
import { CartState } from "../componentes/context/Context";

const Main = () => {
  const {
    state: { simular },
  } = CartState();
  return (
    <Flex>
    <Grid templateRows="75px 560px" templateColumns="1fr 1fr" gap={10}>
      <GridItem colStart={1} colEnd={-1} >
        <Header />
      </GridItem>
      <GridItem bg="#F4F4F4">
        <Simulador />
      </GridItem>
      <GridItem bg="#F4F4F4">
      {simular.rendimento && <Resultado />}
      </GridItem>
    </Grid>
    </Flex>
  );
};

export default Main;

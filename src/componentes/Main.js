import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import Header from "./Header";
import Simulador from "./Simulador";
import Resultado from "./Resultado";
import { CartState } from "../componentes/context/Context";

const Main = () => {
  const {
    state: { simular },
  } = CartState();
  return (
    <Grid templateRows="75px 560px" templateColumns="1fr 1fr" gap={10}>
      <GridItem colStart={1} colEnd={-1}>
        <Header />
      </GridItem>
      <GridItem bg="#EFEFEF">
        <Simulador />
      </GridItem>
      <GridItem bg="#EFEFEF">
      {simular.rendimento && <Resultado />}
      </GridItem>
    </Grid>
  );
};

export default Main;

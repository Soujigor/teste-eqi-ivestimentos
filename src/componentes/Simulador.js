import React, { useState } from "react";
import {
  Grid,
  GridItem,
  Flex,
  Text,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import { UserInput } from "./UserInput";
import { CartState } from "../componentes/context/Context";

const Simulador = () => {
  const {
    state: { indicadores },
    dispatch,
  } = CartState();

  const [rendimento, setRendimento] = useState("");
  const [tipoIndexacao, setTipoIndexacao] = useState("");

  const rendimentoHandler = (type) => {
    setRendimento(type);
  };

  const indexacaoHandler = (type) => {
    setTipoIndexacao(type);
  };

  console.log(rendimento, tipoIndexacao);

  return (
    <Grid templateColumns="1fr 1fr">
      <GridItem
        h="40px"
        align-items="flex-start"
        colStart={1}
        colEnd={-1}
        marginLeft="30px"
        fontWeight="bold"
      >
        Simulador
      </GridItem>
      <GridItem h="auto" marginLeft="30px">
        <Grid templateRows="1fr 1fr 1fr 1fr" gap="10px">
          <GridItem h="10vh">
            <Text>Rendimento</Text>
            <Flex>
              <ButtonGroup
                variant="outline"
                spacing="0"
                size="md"
                height="48px"
                width="200px"
                borderRadius="14px"
                borderColor="black"
                color="black"
              >
                <Button
                  bg={rendimento === "bruto" ? "#EC8C54" : ""}
                  borderLeftRadius="10px"
                  onClick={() => rendimentoHandler("bruto")}
                >
                  {rendimento === "bruto" ? "✓  " : ""}Bruto
                </Button>
                <Button
                  borderRightRadius="10px"
                  bg={rendimento === "liquido" ? "#EC8C54" : ""}
                  onClick={() => rendimentoHandler("liquido")}
                >
                  {rendimento === "liquido" ? "✓  " : ""}Líquido
                </Button>
              </ButtonGroup>
            </Flex>
          </GridItem>
          <GridItem>
            <UserInput text="Aporte Inicial" />
          </GridItem>
          <GridItem>
            <UserInput text="Prazo (em meses)" />
          </GridItem>
          <GridItem>
            <UserInput text="IPCA (ao ano)" value={indicadores[0]?.valor} />
          </GridItem>
        </Grid>
      </GridItem>
      <GridItem h="auto" marginLeft="30px">
        <Grid templateRows="1fr 1fr 1fr 1fr" gap="10px">
          <GridItem h="10vh">
            <Text>Tipos de indexação</Text>
            <Flex>
              <ButtonGroup
                variant="outline"
                spacing="0"
                size="md"
                height="48px"
                width="200px"
                borderColor="black"
                color="black"
              >
                <Button
                  borderLeftRadius="10px"
                  onClick={() => indexacaoHandler("pre")}
                  bg={tipoIndexacao === "pre" ? "#EC8C54" : ""}
                >
                  {tipoIndexacao === "pre" ? "✓  " : ""}PRÉ
                </Button>{" "}
                <Button
                  bg={tipoIndexacao === "pos" ? "#EC8C54" : ""}
                  onClick={() => indexacaoHandler("pos")}
                >
                  {tipoIndexacao === "pos" ? "✓  " : ""}PÓS
                </Button>
                <Button
                  borderRightRadius="10px"
                  bg={tipoIndexacao === "ipca" ? "#EC8C54" : ""}
                  onClick={() => indexacaoHandler("ipca")}
                >
                  {tipoIndexacao === "ipca" ? "✓  " : ""}FIXADO
                </Button>
              </ButtonGroup>
            </Flex>
          </GridItem>
          <GridItem>
            <UserInput text="Aporte Mensal" />
          </GridItem>
          <GridItem>
            <UserInput text="Rentabilidade" />
          </GridItem>
          <GridItem>
            <UserInput text="CDI (ao ano)" value={indicadores[1]?.valor} />
          </GridItem>
        </Grid>
      </GridItem>
      <GridItem h="auto" colStart={1} colEnd={-1}>
        <Flex justifyContent="space-around">
          <Button
            size="md"
            height="48px"
            width="200px"
            borderRadius="10px"
            borderColor="black"
            color="black"
            bg="#EFEFEF"
          >
            Limpar Campos
          </Button>
          <Button
            size="md"
            height="48px"
            width="200px"
            borderRadius="10px"
            borderColor="white"
            color="white"
            bg="#939393"
            onClick={() =>
              dispatch({
                type: "SIMULAR",
                value: { tipoIndex: tipoIndexacao, rendimento: rendimento },
              })
            }
          >
            Simular
          </Button>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default Simulador;

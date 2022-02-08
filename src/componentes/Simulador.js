import React from "react";
import {
  Grid,
  GridItem,
  Flex,
  Text,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import { UserInput } from "./UserInput";

const text1 = ["Aporte Inicial", "Prazo (em meses)", "IPCA (ao ano)"];
const text2 = ["Aporte Mensal", "Rentabilidade", "CDI (ao ano)"];

const Simulador = () => {
  return (
    <Grid templateColumns="1fr 1fr">
      <GridItem
        h="40px"
        align-items="flex-start"
        colStart={1}
        colEnd={-1}
        bg="#EFEFEF"
        marginLeft="30px"
        fontWeight='bold'
      >
        Simulador
      </GridItem>
      <GridItem h="auto" bg="#EFEFEF" marginLeft="30px">
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
                bg="#EFEFEF"
              >
                <Button bg="#EC8C54" borderLeftRadius="10px">
                  Bruto
                </Button>{" "}
                <Button borderRightRadius="10px">Líquido</Button>
              </ButtonGroup>
            </Flex>
          </GridItem>
          {text1.map((text) => (
            <GridItem>
              <UserInput text={text} />
            </GridItem>
          ))}
        </Grid>
      </GridItem>
      <GridItem h="auto" bg="#EFEFEF" marginLeft="30px">
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
                bg="#EFEFEF"
              >
                <Button borderLeftRadius="10px">PRÉ</Button>{" "}
                <Button bg="#EC8C54">PÓS</Button>
                <Button borderRightRadius="10px">FIXADO</Button>
              </ButtonGroup>
            </Flex>
          </GridItem>
          {text2.map((text) => (
            <GridItem>
              <UserInput text={text} />
            </GridItem>
          ))}
        </Grid>
      </GridItem>
      <GridItem h="auto" colStart={1} colEnd={-1} bg="#EFEFEF">
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
          >
            Simular
          </Button>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default Simulador;

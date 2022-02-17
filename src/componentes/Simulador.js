import React, { useState } from "react";
import {
  Grid,
  GridItem,
  Flex,
  Text,
  Button,
  ButtonGroup,
  HStack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
} from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { UserInput } from "./UserInput";
import { CartState } from "../componentes/context/Context";
import useInput from "./hooks/use-input";

const Simulador = () => {
  const {
    state: { indicadores },
    dispatch,
  } = CartState();

  const reg = /^\d+$/;
  const {
    value: enteredAporteInicial,
    isValid: aporteInicialIsValid,
    hasError: aporteInicialHasError,
    valueChangeHandler: aporteInicialChangeHandler,
    inputBlurHandler: aporteInicialBlurHandler,
    reset: resetAporteInicial,
  } = useInput((value) => (value.match(reg) ? true : false));

  const {
    value: enteredPrazo,
    isValid: prazoIsValid,
    hasError: prazoHasError,
    valueChangeHandler: prazoChangeHandler,
    inputBlurHandler: prazoBlurHandler,
    reset: resetPrazo,
  } = useInput((value) => (value.match(reg) ? true : false));

  const {
    // value: enteredIPCA,
    isValid: ipcaIsValid,
    // hasError: ipcaHasError,
    valueChangeHandler: ipcaChangeHandler,
    inputBlurHandler: ipcaBlurHandler,
  } = useInput((value) => (value.match(reg) ? true : false));

  const {
    value: enteredAporteMensal,
    isValid: aporteMensalIsValid,
    hasError: aporteMensalHasError,
    valueChangeHandler: aporteMensalChangeHandler,
    inputBlurHandler: aporteMensalBlurHandler,
    reset: resetAporteMensal,
  } = useInput((value) => (value.match(reg) ? true : false));

  const {
    value: enteredRentabilidade,
    isValid: rentabilidadeIsValid,
    hasError: rentabilidadeHasError,
    valueChangeHandler: rentabilidadeChangeHandler,
    inputBlurHandler: rentabilidadeBlurHandler,
    reset: resetRentabilidade,
  } = useInput((value) => (value.match(reg) ? true : false));

  const inputsAreValid =
    aporteInicialIsValid &&
    prazoIsValid &&
    aporteMensalIsValid &&
    rentabilidadeIsValid;
  console.log(ipcaIsValid);
  const [rendimento, setRendimento] = useState("bruto");
  const [tipoIndexacao, setTipoIndexacao] = useState("pos");

  const rendimentoHandler = (type) => {
    setRendimento(type);
  };

  const indexacaoHandler = (type) => {
    setTipoIndexacao(type);
  };

  const limpar = () => {
    dispatch({ type: "LIMPAR" });
    setRendimento("");
    setTipoIndexacao("");
    resetAporteInicial();
    resetAporteMensal();
    resetPrazo();
    resetRentabilidade();
  };

  const submitHandler = () => {
    dispatch({
      type: "SIMULAR",
      value: { tipoIndex: tipoIndexacao, rendimento: rendimento },
    });
  };

  return (
    <Grid templateColumns="1fr 1fr">
      <GridItem
        h="40px"
        align-items="flex-start"
        colStart={1}
        colEnd={-1}
        marginLeft="30px"
        fontFamily="Helvetica"
        fontWeight="600"
        fontSize="18px"
      >
        Simulador
      </GridItem>
      <GridItem h="auto" marginLeft="30px">
        <Grid templateRows="1fr 1fr 1fr 1fr" gap="10px">
          <GridItem h="10vh">
            <HStack justifyContent="space-between" paddingBottom="10px">
              <Text fontFamily="Helvetica" fontWeight="normal" fontSize="14px">
                Rendimento
              </Text>
              <Popover placement="top-start">
                <PopoverTrigger>
                  <InfoOutlineIcon />
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Rendimentos</PopoverHeader>
                  <PopoverBody>
                    O rendimento bruto são os ganhos totais da aplicação,
                    enquanto que o rendimento líquido é esse montante menos as
                    taxas e impostos sobre ele.
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </HStack>
            <Flex>
              <ButtonGroup
                isAttached
                variant="outline"
                spacing="0"
                size="md"
                height="48px"
                width="100%"
                borderRadius="14px"
                borderColor="black"
                color="black"
              >
                <Button
                  bg={rendimento === "bruto" ? "#EC8C54" : ""}
                  borderColor="black"
                  onClick={() => rendimentoHandler("bruto")}
                  color={rendimento === "bruto" ? "white" : "black"}
                  width="100%"
                  _hover={{}}
                  fontSize="14px"
                  fontFamily="Helvetica"
                  fontWeight="normal"
                >
                  {rendimento === "bruto" ? "✓  " : ""}Bruto
                </Button>
                <Button
                  borderColor="black"
                  bg={rendimento === "liquido" ? "#EC8C54" : ""}
                  onClick={() => rendimentoHandler("liquido")}
                  color={rendimento === "liquido" ? "white" : "black"}
                  width="100%"
                  _hover={{}}
                  fontSize="14px"
                  fontFamily="Helvetica"
                  fontWeight="normal"
                >
                  {rendimento === "liquido" ? "✓  " : ""}Líquido
                </Button>
              </ButtonGroup>
            </Flex>
          </GridItem>
          <GridItem>
            <>
              <UserInput
                text="Aporte Inicial"
                onChange={aporteInicialChangeHandler}
                onBlur={aporteInicialBlurHandler}
                value={enteredAporteInicial}
                color={aporteInicialHasError ? "red" : ""}
              />
              {aporteInicialHasError && (
                <Text
                  fontFamily="Helvetica"
                  fontWeight="normal"
                  fontSize="14px"
                  color="red"
                  paddingTop="5px"
                >
                  Aporte deve ser um número
                </Text>
              )}
            </>
          </GridItem>
          <GridItem>
            <>
              <UserInput
                text="Prazo (em meses)"
                onChange={prazoChangeHandler}
                onBlur={prazoBlurHandler}
                value={enteredPrazo}
                color={prazoHasError ? "red" : ""}
              />
              {prazoHasError && (
                <Text
                  fontFamily="Helvetica"
                  fontWeight="normal"
                  fontSize="14px"
                  color="red"
                  paddingTop="5px"
                >
                  Prazo deve ser um número
                </Text>
              )}
            </>
          </GridItem>
          <GridItem>
            <>
              {/* {ipcaHasError && <p>Insira um número</p>} */}
              <UserInput
                onChange={ipcaChangeHandler}
                onBlur={ipcaBlurHandler}
                text="IPCA (ao ano)"
                value={indicadores[0]?.valor ? indicadores[0]?.valor : ""}
              />
            </>
          </GridItem>
        </Grid>
      </GridItem>
      <GridItem h="auto" marginLeft="30px">
        <Grid templateRows="1fr 1fr 1fr 1fr" gap="10px">
          <GridItem h="10vh" pr={[3]}>
            <HStack justifyContent="space-between" paddingBottom="10px">
              <Text fontFamily="Helvetica" fontWeight="normal" fontSize="14px">
                Tipos de Indexação
              </Text>
              <Popover placement="top-start" >
                <PopoverTrigger>
                  <InfoOutlineIcon />
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Tipos de Indexação</PopoverHeader>
                  <PopoverBody>
                    Pré-fixado tem sua rentabilidade conhecida no momento da
                    aplicação. Os investimentos pós-fixados são aqueles em que
                    não é possível conhecer o rendimento da aplicação no momento
                    da aquisição do título. Esses investimentos são atrelados a
                    um indexador.
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </HStack>
            <Flex>
              <ButtonGroup
                isAttached
                variant="outline"
                spacing="0"
                size="md"
                height="48px"
                width="100%"
                borderColor="black"
                color="black"
              >
                <Button
                  borderColor="black"
                  onClick={() => indexacaoHandler("pre")}
                  bg={tipoIndexacao === "pre" ? "#EC8C54" : ""}
                  color={tipoIndexacao === "pre" ? "white" : "black"}
                  width="100%"
                  _hover={{}}
                  fontSize="14px"
                  fontFamily="Helvetica"
                  fontWeight="normal"
                >
                  {tipoIndexacao === "pre" ? "✓  " : ""}PRÉ
                </Button>
                <Button
                  borderColor="black"
                  bg={tipoIndexacao === "pos" ? "#EC8C54" : ""}
                  onClick={() => indexacaoHandler("pos")}
                  color={tipoIndexacao === "pos" ? "white" : "black"}
                  width="100%"
                  _hover={{}}
                  fontSize="14px"
                  fontFamily="Helvetica"
                  fontWeight="normal"
                >
                  {tipoIndexacao === "pos" ? "✓  " : ""}PÓS
                </Button>
                <Button
                  borderColor="black"
                  bg={tipoIndexacao === "ipca" ? "#EC8C54" : ""}
                  onClick={() => indexacaoHandler("ipca")}
                  color={tipoIndexacao === "ipca" ? "white" : "black"}
                  width="100%"
                  _hover={{}}
                  fontSize="14px"
                  fontFamily="Helvetica"
                  fontWeight="normal"
                >
                  {tipoIndexacao === "ipca" ? "✓  " : ""}FIXADO
                </Button>
              </ButtonGroup>
            </Flex>
          </GridItem>
          <GridItem pr={[3]}>
            <>
              <UserInput
                text="Aporte Mensal"
                onChange={aporteMensalChangeHandler}
                onBlur={aporteMensalBlurHandler}
                value={enteredAporteMensal}
                color={aporteMensalHasError ? "red" : ""}
              />
              {aporteMensalHasError && (
                <Text
                  fontFamily="Helvetica"
                  fontWeight="normal"
                  fontSize="14px"
                  color="red"
                  paddingTop="5px"
                >
                  Aporte deve ser um número
                </Text>
              )}
            </>
          </GridItem>
          <GridItem pr={[3]}>
            <UserInput
              onChange={rentabilidadeChangeHandler}
              onBlur={rentabilidadeBlurHandler}
              text="Rentabilidade"
              color={rentabilidadeHasError ? "red" : ""}
              value={enteredRentabilidade}
            />
            {rentabilidadeHasError && (
              <Text
                fontFamily="Helvetica"
                fontWeight="normal"
                fontSize="14px"
                color="red"
                paddingTop="5px"
              >
                Rentabilidade deve ser um número
              </Text>
            )}
          </GridItem>
          <></>
          <GridItem>
            <UserInput
              text="CDI (ao ano)"
              value={indicadores[1]?.valor ? indicadores[1]?.valor : ""}
            />
          </GridItem>
        </Grid>
      </GridItem>
      <GridItem h="auto" colStart={1} colEnd={-1}>
        <Flex justifyContent="space-around">
          <Button
            size="md"
            height="48px"
            width="200px"
            border="1px"
            borderColor="black"
            color="black"
            bg="#EFEFEF"
            onClick={limpar}
          >
            Limpar Campos
          </Button>
          <Button
            size="md"
            height="48px"
            width="200px"
            color="black"
            bg="#EC8C54"
            onClick={submitHandler}
            disabled={!inputsAreValid}
          >
            Simular
          </Button>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default Simulador;

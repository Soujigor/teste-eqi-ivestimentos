import "./App.css";
import { Flex } from "@chakra-ui/react";
// import { Grid, GridItem } from "@chakra-ui/react";
import Main from "./componentes/Main";

function App() {
  return (
    <Flex
      h="fit-content"
      w="fit-content"
      bg="#F4F4F4"
      margin="30px 45px"
      mx="auto"
    >
      <Main />
    </Flex>
  );
}

export default App;

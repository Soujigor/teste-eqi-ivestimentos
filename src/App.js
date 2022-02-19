import { Flex } from "@chakra-ui/react";

import Main from "./componentes/Main";
import Header from "./componentes/Header";

function App() {
  return (
    <Flex justify="center">
      <Flex
        width="100%"
        justify="center"
        direction="column"
        bg="gray.100"
        mt="40px"
        mx={["10px", "10px", "40px"]}
        py="30px"
      >
        <Header />
        <Main />
      </Flex>
    </Flex>
  );
}

export default App;

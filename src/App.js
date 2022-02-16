import { Stack } from "@chakra-ui/react";

import Main from "./componentes/Main";

function App() {
  return (
    <Stack
      h="fit-content"
      w="fit-content"
      bg="#F4F4F4"
      margin="30px 45px"
      mx="auto"
    >
      <Main />
    </Stack>
  );
}

export default App;

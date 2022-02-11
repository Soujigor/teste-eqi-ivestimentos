import React from "react";
import { Text, Box } from "@chakra-ui/react";

const ResultadoCard = (props) => {
  return (
    <Box bg="#F4F4F4" padding="1"  height="80px" width="180px" boxShadow="dark-lg">
      <Text>{props.text} </Text>
      <Text>{props.value} </Text>
    </Box>
  );
};

export default ResultadoCard;

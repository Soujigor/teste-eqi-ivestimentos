import React from "react";
import { Text, Box } from "@chakra-ui/react";

const ResultadoCard = (props) => {
  return (
    <Box
      bg="#F4F4F4"
      margin="3"
      padding="3"
      height="80px"
      width="180px"
      boxShadow="md"
      border="1px" 
      borderColor="#CBD5E0">
      <Text>{props.text} </Text>
      <Text color={props.color || ""}>{props.value} </Text>
    </Box>
  );
};

export default ResultadoCard;

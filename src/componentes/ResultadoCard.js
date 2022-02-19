import React from "react";
import { Text, Box } from "@chakra-ui/react";

const ResultadoCard = (props) => {
  return (
    <Box
      bg="#F4F4F4"
      padding="3"
      height="80px"
      boxShadow="md"
      border="1px"
      borderColor="#CBD5E0"
      textAlign="center"
    >
      <Text fontWeight="bold">{props.text} </Text>
      <Text color={props.color || ""} paddingTop="10px">
        {props.value}
      </Text>
    </Box>
  );
};

export default ResultadoCard;

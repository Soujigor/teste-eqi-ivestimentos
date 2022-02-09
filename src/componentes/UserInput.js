import React from "react";
import { Text, Input } from "@chakra-ui/react";

export const UserInput = (props) => {
  
  return (
    <>
      <Text mb="8px">{props.text}</Text>
      <Input value={props.value} placeholder="" size="sm" />
    </>
  );
};

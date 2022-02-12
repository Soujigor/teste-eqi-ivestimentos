import React from "react";
import { Text, Input } from "@chakra-ui/react";

export const UserInput = (props) => {
  return (
    <>
      <Text color={props.color} mb="8px">{props.text}</Text>
      <Input
        borderColor={props.color}
        value={props.value}
        onBlur={props.onBlur}
        onChange={props.onChange}
        placeholder=""
        size="sm"
      />
    </>
  );
};

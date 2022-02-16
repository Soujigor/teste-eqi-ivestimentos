import React from "react";
import { Text, Input } from "@chakra-ui/react";

export const UserInput = (props) => {
  return (
    <>
      <Text
        color={props.color}
        mb="8px"
        fontSize="14px"
        fontFamily="Helvetica"
        fontWeight="normal"
      >
        {props.text}
      </Text>
      <Input
        fontFamily="Helvetica"
        fontWeight="normal"
        fontSize="14px"
        variant="flushed"
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

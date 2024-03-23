import React from "react";
import {
  HStack,
  VStack,
  Box,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField
} from "@gluestack-ui/themed";

const ItemsMenuFilter = () => {
  return (
    <VStack bg={"$white"}>
      <HStack padding={"$2"}>
        <Box h="auto" w="$full">
          <FormControl
            size="md"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
            isRequired={false}
          >
            <FormControlLabel mb="$1">
              <FormControlLabelText>
                Busca por categoria o nombre
              </FormControlLabelText>
            </FormControlLabel>
            <Input height={"$16"}>
              <InputField type="text" placeholder="Busca o filtra" />
            </Input>
          </FormControl>
        </Box>
      </HStack>
    </VStack>
  );
};

export default ItemsMenuFilter;

import React from "react";
import {
  VStack,
  HStack,
  Text,
  Box,
  Button,
  ButtonIcon,
  Divider,
  TrashIcon,
} from "@gluestack-ui/themed";

interface HeaderCartProps {
  clearCart: () => void;
}

const HeaderCart = ({ clearCart }: HeaderCartProps) => {
  return (
    <VStack height="$1/5">
      <HStack
        paddingHorizontal="$8"
        paddingVertical="$5"
        justifyContent="space-between"
      >
        <VStack>
          <Text fontWeight="$light" fontSize="$sm">
            Orden No.
          </Text>
          <Box height="$2" />
          <Text fontWeight="$bold" color="$black" fontSize="$xl">
            #130
          </Text>
        </VStack>

        <Button
          size="xs"
          variant="solid"
          bgColor="$warmGray100"
          onPress={() => clearCart()}
        >
          <ButtonIcon size="xs" as={TrashIcon} color="$warmGray400" />
        </Button>
      </HStack>
      <Divider />
    </VStack>
  );
};

export default HeaderCart;

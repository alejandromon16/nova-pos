import React from "react";
import { Product } from "@/store/cart.store";
import {
  Box,
  Button,
  ButtonIcon,
  HStack,
  Text,
  AddIcon,
  RemoveIcon,
} from "@gluestack-ui/themed";

interface ItemCartProps {
  item: Product;
  handleClickDecrease: (itemId: string) => void;
  handleClickAdd: (ItemId: string) => void;
}

const ItemCart = ({
  item,
  handleClickAdd,
  handleClickDecrease,
}: ItemCartProps) => {
  return (
    <HStack
      key={item.id}
      justifyContent="space-between"
      alignItems="center"
      marginBottom="$5"
    >
      <Box width={"$2/6"}>
        <Text fontSize="$xs" color="$black" fontWeight="$bold">
          {item.name}
        </Text>
      </Box>

      <Box width={"$2/6"} flexDirection={"row"} alignItems="center">
        <Box width="$1/3">
          <Button
            size="xs"
            action="secondary"
            onPress={() => handleClickDecrease(item.id)}
          >
            <ButtonIcon color="$black" as={RemoveIcon} />
          </Button>
        </Box>
        <Box width="$1/3" alignItems="center">
          <Text fontSize={"$sm"}>{item.quantity}</Text>
        </Box>
        <Box width="$2/6">
          <Button
            size="xs"
            action="secondary"
            onPress={() => handleClickAdd(item.id)}
          >
            <ButtonIcon color="$black" as={AddIcon} />
          </Button>
        </Box>
      </Box>

      <Box width={"$1/5"}>
        <Text fontSize={"$sm"}>{item.price.toFixed(2)} Bs</Text>
      </Box>
    </HStack>
  );
};

export default ItemCart;

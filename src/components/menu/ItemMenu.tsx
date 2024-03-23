import { View, Text, Pressable } from "react-native";
import React from "react";
import { Box, Image, Text, VStack } from "@gluestack-ui/themed";
import { Product } from "@/store/cart.store";

interface ItemMenuProps {
    item: Product;
    cellSize: number;
}

const ItemMenu = ({item, cellSize}: ItemMenuProps) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.pressable,
        pressed && styles.pressablePressed,
        {
          width: cellSize,
          height: cellSize,
        },
      ]}
    >
      <Box width={"$full"} height={"$full"}>
        <VStack width={"$full"} height={"$full"}>
          <Box width={"$full"} height="$2/3">
            <Image
              alt="image"
              size="full"
              resizeMode="cover"
              source={{
                uri: item.imageUrl,
              }}
              style={{
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              }}
            />
          </Box>
          <VStack height="$1/3" justifyContent="center" alignItems="center">
            <Text fontWeight={"$bold"} color="$black">
              {item.name}
            </Text>
            <Text color="$blue600">{`${item.price}`} Bs</Text>
          </VStack>
        </VStack>
      </Box>
    </Pressable>
  );
};

export default ItemMenu;

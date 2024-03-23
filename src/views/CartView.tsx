import React from "react";
import { GestureHandlerRootView, Swipeable } from "react-native-gesture-handler";
import { useWindowDimensions } from "react-native";
import { Box, VStack, ScrollView } from "@gluestack-ui/themed";
import useCartStore from "@/store/cart.store";
import { MotiView, useAnimationState } from "moti";
import ItemCart from "@/components/cart/ItemCart";
import HeaderCart from "@/components/cart/HeaderCart";

const CartView = () => {
  const { height } = useWindowDimensions();
  const {
    products,
    subtotal,
    totalPrice,
    addProduct,
    removeProduct,
    clearCart,
    updateQuantity,
  } = useCartStore();

  const swipeState = useAnimationState({
    closed: {
      translateX: 0,
      opacity: 0,
    },
    open: {
      translateX: 100,
      opacity: 1,
    },
  });

  return (
    <Box style={{ height: height - 180 }} width="$1/3">
      <Box justifyContent="space-between" height="$full" flexDirection="column">
        <Box height="$3/4">
          <HeaderCart clearCart={() => clearCart()}/>
          <Box height="$4/5" overflow="hidden">
            <VStack margin="$5">
              <ScrollView flexGrow={1}>
                {products.map((product) => (
                  <GestureHandlerRootView>
                    <Swipeable key={product.id} overshootRight={false}>
                      <ItemCart
                        item={product}
                        handleClickAdd={(itemId) => updateQuantity(itemId, -1)}
                        handleClickDecrease={(itemId) => updateQuantity(itemId, 1)}
                      />
                    </Swipeable>
                  </GestureHandlerRootView>
                ))}
              </ScrollView>
            </VStack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CartView;

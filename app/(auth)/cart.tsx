import useCartStore from "@/store/cart.store";
import React, { useEffect } from "react";
import { KeyboardAvoidingView, useWindowDimensions } from "react-native";
import {
  Box,
  Button,
  ButtonText,
  ButtonIcon,
  HStack,
  VStack,
  ScrollView,
  Text,
  useMedia,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  FormControlHelper,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlHelperText,
  AlertCircleIcon,
  Divider,
  AddIcon,
  TrashIcon,
  RemoveIcon,
} from "@gluestack-ui/themed";

const Cart = () => {
  const { height } = useWindowDimensions();
  const { products, subtotal, totalPrice, removeProduct, updateQuantity, clearCart } =
    useCartStore();

  useEffect(() => {
    console.log("this cart products", products);
  }, [products]);

  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
      behavior="padding" // Changed from "height" to "padding"
      keyboardVerticalOffset={200} // Adjust this value as needed
    >
      <Box width="$full" bg="$white" paddingBottom={"$10"}>
        <Box
          justifyContent="space-between"
          height="$full"
          flexDirection="column"
        >
          <Box height="$3/4">
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
            <Box height="$4/5" overflow="hidden">
              <VStack margin="$5">
                <ScrollView flexGrow={1}>
                  {products.map((product) => (
                    <HStack
                      key={product.id}
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Text color="$black" fontWeight="$bold">
                        {product.name}
                      </Text>
                      <Button
                        size="xs"
                        action="secondary"
                        onPress={() =>
                          updateQuantity(product.id, product.quantity - 1)
                        }
                      >
                        <ButtonIcon color="$black" as={RemoveIcon} />
                      </Button>
                      <Text>{product.quantity}</Text>
                      <Button
                        size="xs"
                        action="secondary"
                        onPress={() =>
                          updateQuantity(product.id, product.quantity + 1)
                        }
                      >
                        <ButtonIcon color="$black" as={AddIcon} />
                      </Button>
                      <Text>{product.price.toFixed(2)} Bs</Text>
                    </HStack>
                  ))}
                </ScrollView>
              </VStack>
            </Box>
          </Box>

          <Box>
            <VStack>
              <Divider />
              <VStack margin="$5">
                <HStack justifyContent="space-between">
                  <Text>Subtotal</Text>
                  <Text>{subtotal.toFixed(2)} Bs</Text>
                </HStack>
                <Box height="$5" />
                <HStack justifyContent="space-between" alignItems="center">
                  <Text>Monto de Pago</Text>
                  <Box h="auto" w="$1/2">
                    <FormControl
                      size="md"
                      isDisabled={false}
                      isInvalid={false}
                      isReadOnly={false}
                      isRequired={false}
                    >
                      <Input height="$16">
                        <InputField type="text" placeholder="monto" />
                      </Input>
                      <FormControlHelper>
                        <FormControlHelperText></FormControlHelperText>
                      </FormControlHelper>
                      <FormControlError>
                        <FormControlErrorIcon as={AlertCircleIcon} />
                        <FormControlErrorText>
                          At least 6 characters are required.
                        </FormControlErrorText>
                      </FormControlError>
                    </FormControl>
                  </Box>
                </HStack>
              </VStack>
              <Button>
                <ButtonText>Cobrar {totalPrice.toFixed(2)} Bs</ButtonText>
              </Button>
            </VStack>
          </Box>
        </Box>
      </Box>
    </KeyboardAvoidingView>
  );
};

export default Cart;

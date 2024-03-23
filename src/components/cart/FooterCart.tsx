import React from "react";
import { 
    Box,
    VStack,
    Divider,
    HStack,
    Text,
    Input,
    InputField,
    Button,
    ButtonText,
    FormControl
} from "@gluestack-ui/themed"

const FooterCart = () => {
  return (
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
            </Box>
          </HStack>
        </VStack>
        <Button>
          <ButtonText>Cobrar {totalPrice.toFixed(2)} Bs</ButtonText>
        </Button>
      </VStack>
    </Box>
  );
};

export default FooterCart;

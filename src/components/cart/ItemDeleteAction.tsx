import { View, Text } from "react-native";
import React from "react";

const ItemDeleteAction = () => {
  return (
    <Box
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
      }}
    >
      <MotiView
        state={swipeState}
        style={{
          width: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button onPress={() => {}} bgColor="red">
          <Text>Delete</Text>
        </Button>
      </MotiView>
    </Box>
  );
};

export default ItemDeleteAction;

import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import {
  Box,
  Button,
  ButtonText,
  useMedia,
  Divider,
} from "@gluestack-ui/themed";
import { useRouter } from "expo-router";
import CartView from "@/views/CartView";
import MenuView from "@/views/MenuView";
import NumericKeyboardView from "@/views/NumericKeyboardView";

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: "#1A91FF" }}
    activeColor="black"
    inactiveColor="gray"
    style={{ backgroundColor: "white" }}
  />
);

const renderScene = SceneMap({
  first: MenuView,
  second: NumericKeyboardView,
});

const GeneralArea = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Menu" },
    { key: "second", title: "Calculadora" },
  ]);

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
    />
  );
};

const home = () => {
  const { lg } = useMedia();
  const router = useRouter();

  const handlePress = () => {
    router.push("/cart");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Box flex={1} flexDirection={lg ? "row" : "column"} bgColor="$white">
        <GeneralArea />
        {lg ? (
          <>
            <Divider orientation="vertical" />
            <CartView />
          </>
        ) : (
          <Button onPress={() => handlePress()}>
            <ButtonText>Ver Carrito</ButtonText>
          </Button>
        )}
      </Box>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    flexDirection: "row",
  },
});

export default home;

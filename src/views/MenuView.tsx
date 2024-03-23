import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  Box,
  ScrollView,
} from "@gluestack-ui/themed";
import { MENUDATA } from "@/constants/Menu.constants";
import ItemsMenuFilter from "@/components/menu/ItemsMenuFilter";
import ItemsMenuArea from "@/components/menu/ItemsMenuArea";

const MenuView = () => {
  return (
    <Box height={"$full"} $base-width={"$full"}>
      <ItemsMenuFilter />
      <GestureHandlerRootView>
        <ScrollView>
          <ItemsMenuArea data={MENUDATA} />
        </ScrollView>
      </GestureHandlerRootView>
    </Box>
  );
};

export default MenuView;

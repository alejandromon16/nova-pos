import React, { useEffect, useState } from "react";
import { StyleSheet, useWindowDimensions, View } from "react-native";
import { type DraggableGridProps } from "@mgcrea/react-native-dnd";
import { Box, Switch } from "@gluestack-ui/themed";
import ItemsMenu from "./ItemsMenu";
import ItemsMenuDraggable from "./ItemsMenuDraggable";

const CELL_SIZE = 150;
const CELL_GAP = 15;

const useGridSize = () => {
  const { width } = useWindowDimensions();
  const [gridSettings, setGridSettings] = useState({
    numColumns: 2,
    cellSize: 150,
    cellGap: 15,
  });

  useEffect(() => {
    const getGridSettings = (width) => {
      if (width >= 1200) {
        return { numColumns: 4, cellSize: 200, cellGap: 20 };
      } else if (width >= 700) {
        return { numColumns: 3, cellSize: 200, cellGap: 20 };
      } else {
        return { numColumns: 2, cellSize: 150, cellGap: 15 };
      }
    };

    setGridSettings(getGridSettings(width));
  }, [width]);

  return gridSettings;
};

const ItemsMenuArea = ({ data }) => {
  const { numColumns, cellGap, cellSize } = useGridSize();
  const [isDragEnable, setIsDragEnable] = useState(false);

  const onGridOrderChange: DraggableGridProps["onOrderChange"] = (value) => {
    console.log("onGridOrderChange", value);
  };

  return (
    <Box bg={"$white"}>
      <Box>
        <Switch
          size="md"
          value={isDragEnable}
          isDisabled={false}
          onToggle={() => setIsDragEnable((prev) => !prev)}
        />
      </Box>
      <View
        style={{
          alignSelf: "center",
          paddingHorizontal: 4,
        }}
      >
        {isDragEnable ? <ItemsMenuDraggable data={data} numColumns={numColumns} cellSize={cellSize} /> : <ItemsMenu />}
      </View>
    </Box>
  );
};

const styles = StyleSheet.create({
  grid: {
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: 32,
  },
  title: {
    color: "#555",
    textTransform: "uppercase",
    fontWeight: "bold",
    position: "absolute",
    top: 10,
    left: 10,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 32,
  },
});

export default ItemsMenuArea;

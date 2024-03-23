import { FlatList } from "react-native";
import React from "react";
import { Box } from "@gluestack-ui/themed";
import ItemMenu from "@/components/menu/ItemMenu";

interface ItemsMenuProps {
  data: Product[];
  numColumns: number;
  cellSize: number;
  cellGap: number
}

const ItemsMenu = ({data, numColumns, cellSize, cellGap}: ItemsMenuProps) => {
  const renderItem = ({ item }) => {
    return (
      <Box
        style={{
          width: cellSize,
          height: cellSize,
          overflow: "hidden",
          alignItems: "center",
          justifyContent: "center",
        }}
        $hover={{
          opacity: 0.6,
        }}
      >
        <ItemMenu item={item}/>
      </Box>
    );
  };

  return (
    <FlatList
      key={numColumns}
      data={data}
      numColumns={numColumns}
      renderItem={({ item }) => renderItem({ item: item })}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ gap: cellGap, paddingBottom: 200 }}
      columnWrapperStyle={{ gap: cellGap }}
    />
  );
};

export default ItemsMenu;

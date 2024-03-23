import { View, Text } from "react-native";
import React from "react";
import { DndProvider, Draggable, DraggableGrid } from "@mgcrea/react-native-dnd";
import ItemMenu from "./ItemMenu";
import { Product } from "@/store/cart.store";

interface ItemDraggableProps {
  item: Product;
  cellSize: number;
}

const ItemDraggable = ({item, cellSize}: ItemDraggableProps) => {
  return (
    <Draggable
      key={item.id}
      id={item.id}
      style={{
        backgroundColor: "white",
        width: cellSize,
        height: cellSize,
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
      }}
    >
      <ItemMenu item={item} cellSize={cellSize} />
    </Draggable>
  );
};

interface ItemsMenuDraggableProps {
  data: Product[];
  numColumns: number;
  cellSize: number;
}

const ItemsMenuDraggable = ({ data, numColumns, cellSize}:ItemsMenuDraggableProps) => {
  return (
    <DndProvider>
      <DraggableGrid
        direction="row"
        key={numColumns}
        size={numColumns}
        style={{
          width: cellSize * numColumns,
        }}
      >
        {data.map((item) => (
          <ItemDraggable item={item} cellSize={cellSize}/>
        ))}
      </DraggableGrid>
    </DndProvider>
  );
};

export default ItemsMenuDraggable;

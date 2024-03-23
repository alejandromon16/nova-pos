import { StyleSheet, Text, View } from "react-native";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Tasks() {
  const todos = useQuery(api.todos.get);
  return (
    <View style={styles.container}>
      {todos?.map(({ _id, text }) => (
        <Text key={_id}> {text}</Text>
      ))}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, View, TextInput } from "react-native";
import { elevation } from "../common/styles";

const Search = () => {
  return (
    <View style={styles.searchContainer}>
      <FontAwesome name="search" size={25} style={styles.icon} />
      <TextInput style={styles.input} placeholder="Restaurants, food" />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchContainer: {
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 16,
    ...elevation,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 20,
    alignSelf: "stretch",
  },
});

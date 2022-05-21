import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, View, TextInput, Keyboard } from "react-native";
import { elevation } from "../common/styles";

const Search = ({ onEndEditing }) => {
  const [text, setText] = useState("");

  const isEmpty = text.trim().length === 0;

  const onEndEditingHandler = () => {
    if (isEmpty) return;
    onEndEditing(text);
    setText("");
  };

  return (
    <View style={styles.searchContainer}>
      <FontAwesome name="search" size={25} style={styles.searchIcon} />
      <TextInput
        value={text}
        style={styles.input}
        placeholder="Restaurants, food"
        onEndEditing={onEndEditingHandler}
        onChangeText={term => setText(term)}
      />
      {isEmpty ? null : (
        <FontAwesome
          size={22}
          name="close"
          style={styles.clearIcon}
          onPress={() => {
            setText("");
            Keyboard.dismiss();
          }}
        />
      )}
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
    marginBottom: 16,
    ...elevation,
  },
  searchIcon: {
    marginRight: 10,
  },
  clearIcon: {
    marginLeft: 10,
    color: "grey",
  },
  input: {
    flex: 1,
    fontSize: 20,
    alignSelf: "stretch",
  },
});

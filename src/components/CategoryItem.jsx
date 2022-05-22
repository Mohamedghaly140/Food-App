import React from "react";
import Images from "../common/images";
import { elevation } from "../common/styles";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ActivityIndicator,
} from "react-native";

const CategoryItem = ({
  active,
  lastItem,
  name = "Burger",
  onSelectCategory,
  imageUri = Images.burger,
}) => {
  return (
    <Pressable
      style={[
        styles.container,
        active && styles.active,
        lastItem && styles.lastItem,
      ]}
      onPress={onSelectCategory}
    >
      <View style={styles.imageWrapper}>
        <Image source={imageUri} style={styles.image} resizeMode="contain" />
      </View>
      <Text style={styles.name}>{name}</Text>
    </Pressable>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 100,
    marginRight: 16,
    borderRadius: 50,
    backgroundColor: "#fff",
    ...elevation,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 35,
    height: 35,
  },
  imageWrapper: {
    width: 50,
    height: 50,
    marginBottom: 5,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  name: {
    color: "#000",
    fontWeight: "bold",
  },
  active: {
    backgroundColor: "rgb(241,186,87)",
  },
  lastItem: {
    marginRight: 0,
  },
});

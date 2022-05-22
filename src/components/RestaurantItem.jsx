import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { elevation } from "../common/styles";

const RestaurantItem = ({ imageUri, name, rating, price }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={{ uri: imageUri }} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.info}>
          <Text style={styles.rating}>Rate: {rating}</Text>
          <Text style={styles.price}>{price}</Text>
        </View>
      </View>
    </View>
  );
};

export default RestaurantItem;

const styles = StyleSheet.create({
  container: {
    ...elevation,
    backgroundColor: "#fff",
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    justifyContent: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  imageWrapper: {
    height: 75,
    width: 75,
    borderRadius: 50,
    marginRight: 10,
    overflow: "hidden",
    alignSelf: "center",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  infoContainer: {
    flex: 1,
    paddingLeft: 6,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    maxWidth: "90%",
  },
  info: {
    marginTop: 8,
    flexDirection: "row",
  },
  rating: {
    marginRight: 18,
  },
  price: {
    color: "#E2C104",
  },
});

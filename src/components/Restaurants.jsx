import React from "react";
import { StyleSheet, Text, View } from "react-native";
import yelp from "../api/yelp";

const Restaurants = () => {
  const searchRestaurants = async () => {
    const response = await yelp.get("/search", {
      params: {
        limit: 15,
        term: "Dessert",
        location: "Toronto",
      },
    });
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.header}>Top Restaurants</Text>
    </View>
  );
};

export default Restaurants;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginHorizontal: 22,
    backgroundColor: "red",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

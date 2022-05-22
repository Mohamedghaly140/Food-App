import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import useRestaurants from "../hooks/useRestaurants";
import RestaurantItem from "./RestaurantItem";

const Restaurants = ({ term = "" }) => {
  const [{ data, loading, error }, searchRestaurants] = useRestaurants();

  useEffect(() => {
    if (term.trim().length === 0) {
      return;
    }
    // searchRestaurants(term);
  }, [term]);

  console.log({ data });

  if (error) {
    return (
      <View style={styles.center}>
        <Text>Something went wrong</Text>
      </View>
    );
  }

  return (
    <>
      <Text style={styles.header}>Top Restaurants</Text>
      {loading ? (
        <View style={styles.center}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainerStyle}
          keyExtractor={({ name }, idx) => `${name}-${idx}`}
          renderItem={({ item }) => (
            <RestaurantItem
              name={item.name}
              price={item.price}
              rating={item.rating}
              imageUri={item.image_url}
            />
          )}
        />
      )}
    </>
  );
};

export default Restaurants;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 16,
    marginHorizontal: 22,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 22,
    marginBottom: 10,
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainerStyle: {
    paddingTop: 6,
    paddingHorizontal: 22,
  },
});

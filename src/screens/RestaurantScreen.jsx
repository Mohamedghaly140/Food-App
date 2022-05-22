import React, { useEffect } from "react";
import { Image } from "react-native-elements";
import {
  View,
  FlatList,
  Dimensions,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import useRestaurant from "../hooks/useRestaurant";
import Spinner from "../components/Spinner";

const { height, width } = Dimensions.get("window");

const RestaurantScreen = ({ route }) => {
  const { id } = route.params;

  const [{ data, loading, error }, getRestaurantById] = useRestaurant();

  useEffect(() => {
    if (id) {
      getRestaurantById(id);
    }
  }, [id]);

  return (
    <View style={styles.container}>
      {loading || data?.photos === undefined ? (
        <Spinner />
      ) : (
        <FlatList
          data={data?.photos}
          showsVerticalScrollIndicator={false}
          keyExtractor={(photo, idx) => `${photo}-${idx}`}
          renderItem={({ item }) => (
            <Image
              style={styles.image}
              source={{ uri: item }}
              PlaceholderContent={<ActivityIndicator size="small" />}
            />
          )}
        />
      )}
    </View>
  );
};

export default RestaurantScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width,
    height: height * 0.28,
  },
});

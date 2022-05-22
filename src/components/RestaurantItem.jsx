import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { elevation } from "../common/styles";
import { Image } from "react-native-elements";

const RestaurantItem = ({ id, imageUri, name, rating, price }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      onPress={() => navigation.navigate("Restaurant", { id })}
    >
      <View style={styles.imageWrapper}>
        <Image
          style={styles.image}
          source={{ uri: imageUri }}
          PlaceholderContent={<ActivityIndicator size="small" />}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.info}>
          <Text style={styles.rating}>Rate: {rating}</Text>
          <Text style={styles.price}>{price}</Text>
        </View>
      </View>
    </TouchableOpacity>
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

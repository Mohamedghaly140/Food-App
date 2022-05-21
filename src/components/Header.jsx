import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.textSmall}>Grab your</Text>
      <Text style={styles.textLarge}>delicous meal!</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    marginBottom: 16,
  },
  textSmall: {
    fontSize: 30,
  },
  textLarge: {
    fontSize: 38,
    fontWeight: "bold",
  },
});

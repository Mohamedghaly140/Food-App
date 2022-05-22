import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";

const Spinner = () => {
  return (
    <View style={styles.center}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default Spinner;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

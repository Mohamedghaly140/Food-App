import { StyleSheet, SafeAreaView, StatusBar, Platform } from "react-native";
import Header from "./src/components/Header";
import Search from "./src/components/Search";

const isAndroid = Platform.OS === "android";

const barStyle = isAndroid ? "light-content" : "dark-content";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={barStyle} />
      <Header />
      <Search />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 22,
    backgroundColor: "#fff",
  },
});

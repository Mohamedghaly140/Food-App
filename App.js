import { StyleSheet, SafeAreaView, StatusBar, Platform } from "react-native";
import Header from "./src/components/Header";
import Search from "./src/components/Search";
import BottomSheetApp from "./src/components/BottomSheetApp/BottomSheetApp";

const isAndroid = Platform.OS === "android";

export default function App() {
  return (
    <BottomSheetApp />
    // <SafeAreaView style={styles.container}>
    //   <StatusBar barStyle={isAndroid ? "light-content" : "dark-content"} />
    //   <Header />
    //   <Search />
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 22,
    backgroundColor: "#fff",
  },
});

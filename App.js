import { useState } from "react";
import {
  View,
  Platform,
  StatusBar,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import CategoriesList from "./src/components/CategoriesList";
import Header from "./src/components/Header";
import Search from "./src/components/Search";
import Container from "./src/components/Container";
import Restaurants from "./src/components/Restaurants";

const isAndroid = Platform.OS === "android";
const barStyle = isAndroid ? "light-content" : "dark-content";

const App = () => {
  const [term, setTerm] = useState("Burger");

  const onSelectCategoryHandler = categoryName => {
    setTerm(categoryName);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle={barStyle} />
      <Container>
        <Header />
        <Search onEndEditing={term => setTerm(term)} />
      </Container>
      <CategoriesList
        selectedCategory={term}
        onSelectCategory={onSelectCategoryHandler}
      />
      <Restaurants />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

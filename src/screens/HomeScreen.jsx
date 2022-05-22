import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "../components/Header";
import Search from "../components/Search";
import Container from "../components/Container";
import Restaurants from "../components/Restaurants";
import CategoriesList from "../components/CategoriesList";

const HomeScreen = () => {
  const [term, setTerm] = useState("Burger");

  const onSelectCategoryHandler = categoryName => {
    setTerm(categoryName);
  };

  return (
    <View style={styles.screen}>
      <Container>
        <Header />
        <Search onEndEditing={term => setTerm(term)} />
      </Container>
      <CategoriesList
        selectedCategory={term}
        onSelectCategory={onSelectCategoryHandler}
      />
      <Restaurants term={term} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "rgb(253, 253, 253)",
  },
});

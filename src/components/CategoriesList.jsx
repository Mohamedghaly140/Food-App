import React from "react";
import { StyleSheet, FlatList, View, Dimensions } from "react-native";
import { CATEGORIES } from "../data/data";
import CategoryItem from "./CategoryItem";

const { height } = Dimensions.get("window");

const CategoriesList = ({ selectedCategory, onSelectCategory }) => {
  return (
    <FlatList
      horizontal
      data={CATEGORIES}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentContainerStyle}
      keyExtractor={({ name }, idx) => `${name}-${idx}`}
      renderItem={({ item, index }) => (
        <CategoryItem
          {...item}
          active={item.name === selectedCategory}
          lastItem={index === CATEGORIES.length - 1}
          onSelectCategory={() => onSelectCategory(item.name)}
        />
      )}
    />
  );
};

export default CategoriesList;

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingHorizontal: 22,
    paddingBottom: height * 0.12,
  },
  listWrapper: {
    marginBottom: 16,
  },
});

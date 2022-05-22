import React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { CATEGORIES } from "../data/data";
import CategoryItem from "./CategoryItem";

const CategoriesList = ({ selectedCategory, onSelectCategory }) => {
  return (
    <View>
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
    </View>
  );
};

export default CategoriesList;

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingBottom: 16,
    paddingHorizontal: 22,
  },
});

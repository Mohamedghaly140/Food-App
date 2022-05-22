import React from "react";
import { StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Item,
  HeaderButton,
  HeaderButtons,
} from "react-navigation-header-buttons";

import HomeScreen from "../screens/HomeScreen";
import RestaurantScreen from "../screens/RestaurantScreen";
import BottomSheetScreen from "../screens/BottomSheetScreen/BottomSheetScreen";

const Stack = createNativeStackNavigator();

const IconHeadrButton = props => (
  <HeaderButton
    {...props}
    iconSize={24}
    IconComponent={MaterialCommunityIcons}
  />
);

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={IconHeadrButton}>
                <Item
                  title="Bottom Sheet"
                  iconName="format-wrap-top-bottom"
                  onPress={() => navigation.navigate("BottomSheet")}
                />
              </HeaderButtons>
            ),
          })}
        />
        <Stack.Screen name="BottomSheet" component={BottomSheetScreen} />
        <Stack.Screen
          name="Restaurant"
          component={RestaurantScreen}
          options={{ title: "Restaurant Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});

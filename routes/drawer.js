import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import AboutStack from "./aboutStack";
import HomeStack from "./homeStack";

const RootDrawerNavigator = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootDrawerNavigator.Navigator initialRouteName="GameZone">
        <RootDrawerNavigator.Screen
          name="Home"
          component={HomeStack}
          options={{ headerShown: false }}
        />
        <RootDrawerNavigator.Screen
          name="About"
          component={AboutStack}
          options={{ headerShown: false }}
        />
      </RootDrawerNavigator.Navigator>
    </NavigationContainer>
  );
}

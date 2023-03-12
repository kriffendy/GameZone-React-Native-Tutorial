import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from "@react-navigation/native";
import About from "../screens/about";
import Header from "../shared/header";

const AboutStack = createStackNavigator();
export default function MyStacks({ navigation }) {
  return (
    <AboutStack.Navigator initialRouteName="GameZone" headerMode="screen">
      <AboutStack.Screen
        name="About"
        component={About}
        options={{
          headerTitle: () => (
            <Header navigation={navigation} title="About GameZone" />
          ),
        }}
      />
    </AboutStack.Navigator>
  );
}

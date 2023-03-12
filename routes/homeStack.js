import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import Header from "../shared/header";

const HomeStack = createStackNavigator();
export default function MyStacks({ navigation }) {
  return (
    <HomeStack.Navigator initialRouteName="GameZone" headerMode="screen">
      <HomeStack.Screen
        name="GameZone"
        component={Home}
        options={{
          headerTitle: () => (
            <Header navigation={navigation} title="GameZone" />
          ),
        }}
      />
      <HomeStack.Screen name="ReviewDetails" component={ReviewDetails} />
    </HomeStack.Navigator>
  );
}

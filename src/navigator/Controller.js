import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import colors from "../utils/colors";
import Screen1 from "../screens/Screen1";
import Screen2 from "../screens/Screen2";
import MainScreen from "../screens/MainScreen";

const Stack = createStackNavigator();

const ControllerNav = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{ gestureEnabled: false }}
        headerMode="none"
      >
        <Stack.Screen name="mainScreen" component={MainScreen} />
        <Stack.Screen name="screen1" component={Screen1} />
        <Stack.Screen name="screen2" component={Screen2} />
      </Stack.Navigator>
    </>
  );
};

export default ControllerNav;

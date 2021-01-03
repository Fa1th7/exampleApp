import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Controller from "./src/navigator/Controller";

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Controller />
      </NavigationContainer>
    </>
  );
};



export default App;

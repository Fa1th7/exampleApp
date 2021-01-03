import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import {
  responsiveHeight as rh,
  responsiveWidth as rw,
  responsiveFontSize as rf,
} from "react-native-responsive-dimensions";
import colors from "../utils/colors";

const MainScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.options}
        onPress={() => navigation.navigate("screen1")}
      >
        <Text style={styles.optionText}>BOOK APP</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.options}
        onPress={() => navigation.navigate("screen2")}
      >
        <Text style={styles.optionText}>UX Page</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  options: {
    height: rf(30),
    width: rf(30),
    backgroundColor: colors.white,
    borderRadius: rf(1),
    elevation: 4,
    justifyContent: "center",
  },
  optionText: {
    fontSize: rf(4),
    color: colors.grey,
    alignSelf: "center",
  },
});
export default MainScreen;

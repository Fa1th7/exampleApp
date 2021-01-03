import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {
  responsiveHeight as rh,
  responsiveWidth as rw,
  responsiveFontSize as rf,
} from "react-native-responsive-dimensions";
import colors from "../utils/colors";

const Header1 = ({
  header,
  onBackButtonPress,
  conatainerStyle,
  backIconColor,
  headerTextStyle,
  backIconSize,
}) => {
  return (
    <View style={{ ...styles.container, ...conatainerStyle }}>
      <View style={styles.headerContainer}>
        <Text style={{ ...styles.headerText, ...headerTextStyle }}>
          {header}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position:'absolute'
  },
  headerContainer: {
    alignSelf: "center",
  },

  headerText: {
    color: colors.white,
    alignSelf: "center",
  },
});
export default Header1;

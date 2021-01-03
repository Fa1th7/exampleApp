import React from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Header1 from "../components/Header1";
import LessonDetails from "../components/LessonDetails";
import colors from "../utils/colors";
import LessonDataSet from "../utils/LessonData";
import {
  responsiveHeight as rh,
  responsiveWidth as rw,
  responsiveFontSize as rf,
} from "react-native-responsive-dimensions";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Screen2 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header1
        header={"UX Fundamentals"}
        conatainerStyle={styles.headerStyle}
        headerTextStyle={styles.headerTextStyle}
      />
      <ScrollView contentContainerStyle={styles.itemContainerStyle}>
        <View style={styles.itemList}>
          {LessonDataSet.map((item, index) => {
            return (
              <LessonDetails
                key={index}
                header={"Introduction to UX"}
                items={item}
              />
            );
          })}
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.iconStyle}
      >
        <MaterialIcons
          style={styles.icon}
          name="chevron-left"
          color={colors.white}
          size={rf(6)}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerStyle: {
    backgroundColor: colors.primary,
    height: rh(12),
    width: rw(100),
    position: "absolute",
    overflow: "visible",
  },
  headerTextStyle: {
    fontSize: rf(2.5),
  },
  itemContainerStyle: {
    position: "absolute",
    top: rh(10),
    left: rw(3),
  },
  iconStyle: {
    position: "absolute",
    height: rh(12),
    justifyContent: "center",
  },
  icon: {
    alignSelf: "center",
  },
  itemList: {
    paddingBottom: rh(10),
  },
});
export default Screen2;

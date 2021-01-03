import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import {
  responsiveHeight as rh,
  responsiveWidth as rw,
  responsiveFontSize as rf,
} from "react-native-responsive-dimensions";
import colors from "../utils/colors";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const LessonDetails = ({ header, items, containerStyle }) => {
  return (
    <View style={{...styles.container, containerStyle}}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{header}</Text>
      </View>
      <View style={styles.content}>
        {items.map((item, index) => {
          if (item.status === "completed") {
            return (
              <View key={index} style={styles.item}>
                <View style={styles.itemContainer}>
                  <View style={styles.itemCircle}>
                    <MaterialCommunityIcons
                      style={styles.iconSetting}
                      name="check"
                      color={colors.white}
                      size={rf(2)}
                    />
                  </View>
                  <View style={styles.itemLine}></View>
                </View>
                <View style={styles.itemInfoContainer}>
                  <Text style={styles.itemTitleStyle}>{`${item.title}`}</Text>
                  <Text
                    style={styles.itemStatusStyle}
                  >{`${item.statusInfo}`}</Text>
                </View>
              </View>
            );
          } else if (item.status === "incomplete") {
            return (
              <View key={index} style={styles.item}>
                <View style={styles.itemContainer}>
                  <View style={styles.circleIncomplete} />
                  <View style={styles.itemLineLockedInCom}></View>
                </View>
                <View style={styles.itemInfoContainer}>
                  <Text style={styles.itemTitleStyle}>{`${item.title}`}</Text>
                  <Text
                    style={styles.itemStatusStyle}
                  >{`${item.statusInfo}`}</Text>
                </View>
              </View>
            );
          }
          else if (item.status === "locked" && index !== items.length -1) {
            return (
                <View key={index} style={styles.item}>
                <View style={styles.itemContainer}>
                  <View style={styles.itemCircleLocked}>
                    <MaterialCommunityIcons
                      style={styles.iconSetting}
                      name="lock-outline"
                      color={colors.primary}
                      size={rf(2)}
                    />
                  </View>
                  <View style={styles.itemLineLockedInCom}></View>
                </View>
                <View style={styles.itemInfoContainer}>
                  <Text style={styles.itemTitleStyle}>{`${item.title}`}</Text>
                  <Text
                    style={styles.itemStatusStyle}
                  >{`${item.statusInfo}`}</Text>
                </View>
              </View>
            );
          }
          else if (item.status === "locked" && index === items.length -1) {
            return (
                <View key={index} style={styles.item}>
                <View style={styles.itemContainer}>
                  <View style={styles.itemCircleLocked}>
                    <MaterialCommunityIcons
                      style={styles.iconSetting}
                      name="lock-outline"
                      color={colors.primary}
                      size={rf(2)}
                    />
                  </View>
                </View>
                <View style={styles.itemInfoContainer}>
                  <Text style={styles.itemTitleStyle}>{`${item.title}`}</Text>
                  <Text
                    style={styles.itemStatusStyle}
                  >{`${item.statusInfo}`}</Text>
                </View>
              </View>
            );
          }
        })}
      </View>
      <TouchableOpacity style = {styles.button}>
          <Text style = {styles.buttonTextStyle}>Keep Learning</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.white,
    width: rw(94),
    alignSelf: "center",
    elevation: 6,
    marginBottom: rh(4),
  },
  headerContainer: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: rh(0.1),
    width: rw(94),
    height: rh(10),
    borderBottomColor: colors.grey,
  },
  iconStyle: {
    alignItems: "center",
  },
  headerText: {
    color: colors.black,
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: rf(3),
  },
  ghost: {
    width: rf(4),
  },
  content: {
      padding: rf(4)
  },
  item: {
    flexDirection: "row",
  },
  itemContainer: {
    marginRight: rw(3),
  },
  itemLine: {
    backgroundColor: colors.primary,
    height: rh(8),
    width: rw(0.8),
    alignSelf: "center",
  },
  itemCircle: {
    height: rf(3),
    width: rf(3),
    borderRadius: rf(40),
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  itemTitleStyle: {
    fontSize: rf(2.2),
    alignSelf: "center",
    color: colors.balck,
    fontWeight: "bold",
  },
  itemInfoContainer: {
    alignItems: "flex-start",
    marginHorizontal: rw(5)
  },
  itemStatusStyle: {
    marginTop: rh(1),
  },
  circleIncomplete: {
    height: rf(3),
    width: rf(3),
    borderRadius: rf(40),
    backgroundColor: colors.white,
    alignSelf: "center",
    borderColor: colors.primary,
    borderWidth: rf(0.3)
  },
  button:{
      backgroundColor: colors.primary,
      width:rw(80),
      alignSelf:'center',
      height: rh(7),
      marginVertical: rh(3),
      alignItems:'center',
      justifyContent:'center'
  },
  buttonTextStyle:{
      fontSize: rf(2),
      color: colors.white,
      fontWeight: 'bold'
  },
  itemCircleLocked:{
    height: rf(3),
    width: rf(3),
    borderRadius: rf(40),
    backgroundColor: colors.lightGrey,
    alignItems: "center",
    justifyContent: "center",
  },
  itemLineLockedInCom: {
    backgroundColor: colors.lightGrey,
    height: rh(8),
    width: rw(0.8),
    alignSelf: "center",
  },
});
export default LessonDetails;

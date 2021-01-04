import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import {
  responsiveHeight as rh,
  responsiveWidth as rw,
  responsiveFontSize as rf,
} from "react-native-responsive-dimensions";
import colors from "../utils/colors";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const BookPage = ({ heading, chapter, image, content, titleOverLay }) => {
  return (
    <ScrollView Style={styles.contanier}>
      <Image style={styles.pageImage} source={image} />
      <View style={styles.cotentConatiner}>
        <Text style={styles.content}>{content}</Text>
      </View>
      <View style={styles.titleOverLayContainerAbs}>
        <View style={styles.titleOverLayContainer}>
          <Text style={styles.titleOverLay}>{titleOverLay}</Text>
        </View>
      </View>
      <View style={styles.headingContainerAbs}>
         
        <View style={styles.headingContainer}>
        
          <Text style={styles.headingChapter}>{`Chapter:`}</Text>
          <Text style={styles.headingTexts}>{`${chapter}`}</Text>
          <View style={styles.headingDivider} />
          <Text style={styles.headingTexts}>{heading}</Text>
        </View>
        
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  pageImage: {
    height: rh(30),
    width: rw(100),
  },
  content: {
    fontSize: rf(2.2),
  },
  headingContainerAbs: {
    flexDirection: "row",
    position: "absolute",
    right: rw(0),
    top: rh(0),
    overflow: "visible",
    height: rh(4),
    width: rw(100),
    alignItems: "center",
    justifyContent: "center",
  },
  headingContainer: {
    flexDirection: "row",
    alignSelf: "center",
  },
  headingDivider: {
    backgroundColor: colors.green,
    width: rw(0.5),
  },
  headingTexts: {
    fontSize: rf(2),
    color: colors.accent,
    fontWeight: "bold",
    marginHorizontal: rw(2),
  },
  headingChapter: {
    fontSize: rf(2),
    color: colors.accent,
  },
  titleOverLayContainerAbs: {
    position: "absolute",
    right: rw(0),
    top: rh(8),
    overflow: "visible",
    height: rh(4),
    width: rw(100),
    alignItems: "center",
    justifyContent: "center",
  },
  titleOverLayContainer: {
    alignSelf: "center",
  },
  titleOverLay: {
    fontSize: rf(2.5),
    color: colors.grey,
    fontWeight: "bold",
  },
  cotentConatiner: {
    padding: rf(2),
  },
  icon:{
    marginHorizontal: rw(15)
},
ghostRight:{
    marginHorizontal: rw(15),
    width: rf(4)
}
});
export default BookPage;

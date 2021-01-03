import React, { useEffect, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import BookPage from "../components/BookPage";
import BookData from "../utils/BookData";
import Carousel from "pinar";
import colors from "../utils/colors";
import {
  responsiveHeight as rh,
  responsiveWidth as rw,
  responsiveFontSize as rf,
} from "react-native-responsive-dimensions";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Screen1 = ({navigation}) => {
  const carouselRef = useRef();
  const [index, setIndex] = useState(1)
  const [total, setTotal] = useState(BookData.length)
 
  return (
    <SafeAreaView style={styles.container}>
     
      <Carousel
        horizontal={false}
        showsControls={false}
        showsDots={false}
        ref={carouselRef}
        index = {1}
        onIndexChanged = {({index,total}) => {
            setIndex(index+1);
            setTotal(total);
        }}
      >
        {BookData.map((item, index) => {
          return (
            <BookPage
              key={index}
              heading={item.heading.title}
              chapter={item.heading.chapter}
              image={item.image}
              content={item.content}
              titleOverLay={item.titleOverLay}
            />
          );
        })}
      </Carousel>
      <View style={styles.bottomCotainer}>
        <View style = {styles.bottomCotainerInner}>
        <MaterialCommunityIcons style = {styles.iconSetting} name="dots-vertical" color={"black"} size={rf(4)} />
        <TouchableOpacity
            onPress = {() => {
                carouselRef.current.scrollToPrev()
            }}
        >
        <MaterialIcons style = {styles.icon} name="chevron-left" color={"black"} size={rf(4)} />
        </TouchableOpacity>
        <Text style = {styles.upperNumberText}>{index}</Text>
        <Text style = {styles.middleText}>{`/`}</Text>
        <Text style = {styles.lowerNumberText}>{total}</Text>
        <TouchableOpacity
            onPress = {() => carouselRef.current.scrollToNext()}
        >
        <MaterialIcons style = {styles.icon} name="chevron-right" color={"black"} size={rf(4)} />
        </TouchableOpacity>
        <MaterialCommunityIcons style = {styles.iconSetting} name="dots-vertical" color={"black"} size={rf(4)} />
        </View>
      </View>
      <TouchableOpacity style = {styles.backButton} onPress = {() => navigation.goBack()}>
      <MaterialIcons
            name="chevron-left"
            color={"black"}
            size={rf(4)}
          />
          </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomCotainer: {
    backgroundColor: colors.white,
    height: rh(8),
    width: rw(100),
    alignItems:'center',
    justifyContent:'center'
  },
  bottomCotainerInner:{
      flexDirection:'row'
  },
  upperNumberText:{
    fontSize:rf(3),
    fontWeight:'bold',
    marginRight: rw(1)
  },
  lowerNumberText:{
    fontSize:rf(2),
    fontWeight:'bold',
    alignSelf:'flex-end'
  },
  middleText:{
    alignSelf:'center'
  },
  icon:{
      marginHorizontal: rw(10)
  },
  iconSetting:{
      marginHorizontal: rw(8)
  },
  backButton:{
      position: 'absolute',
      left:rw(1),
      top:0,
      overflow:'visible'
  }
});
export default Screen1;

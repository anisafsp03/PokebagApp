import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { colors } from '../asset/color';


const ListCard = ({source, text1, text2, title}) => {
  return (
    <TouchableOpacity>
      <View style={styles.imageWrapper}>
        <Text style={{paddingBottom:6}}>{title}</Text>
        <Image style={styles.Image} source={source} />
        <View style={{flex:1, flexDirection:'row'}}>
          <Text>{text1}</Text>
          <Text>{text2}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListCard;

const styles = StyleSheet.create({
  imageWrapper: {
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor:colors.shadow,
    borderRadius: 10,
    width: 80,
    height:50
  },
  Image: {
    width: 50,
    height: 50,
    padding: 5,
  },
});

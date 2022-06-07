import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const Input = ({onChangeText, value, placeHolder}) => {
  return (
    <View style={{margin:15}}>
      <TextInput
        style={styles.InputContainer}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeHolder}
     
      />
     
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  InputContainer: {
    borderColor: 'green',
    borderRadius: 10,
    borderWidth: 1,
    width: 300,
    alignSelf:'center',
    padding:10,
    height:45
  },
});

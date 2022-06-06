import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, colors2} from '../asset/colors';

const LoginScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: colors.background2}}>Login</Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});

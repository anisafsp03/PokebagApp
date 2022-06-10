import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {colors} from '../asset/color';
import React from 'react';
const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="small" color="#0000ff" />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

import { ScrollView, Text, View } from 'react-native';
import { Colors, ProgressBar } from 'react-native-paper';
import styles from '../asset/styles';
import React from 'react';
export default function Stats(props) {
  const {item} = props;

  return (
    <ScrollView>
      {item.stats.map((stat, idx) => {
        return (
          <View key={idx} style={{flexDirection: 'row', marginBottom: 20}}>
            <Text style={styles.stats__title}>
              {stat.stat.name[0].toUpperCase() + stat.stat.name.substring(1)}
            </Text>
            <Text style={styles.stats__text}>{stat.base_stat}</Text>
            <View style={{width: 130, alignContent: 'center', paddingTop: 10}}>
              <ProgressBar
                progress={stat.base_stat / 100}
                color={Colors.grey800}
              />
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const ListHeader: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>POKEDEX</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    letterSpacing: -0.3,
  },
});

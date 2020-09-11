import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultsList = ({ title }) => {
  return (
    <View>
      <Text style={styless.title}>{title}</Text>
    </View>
  );
};

const styless = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ResultsList;

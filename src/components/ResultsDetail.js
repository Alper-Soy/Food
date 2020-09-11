import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ResultsDetail = ({ result }) => {
  return (
    <View style={styless.container}>
      <View>
        <Image style={styless.image} source={{ uri: result.image_url }} />
        <Text style={styless.name}>{result.name}</Text>
        <Text>
          {result.rating} Stars, {result.review_count} Reviews
        </Text>
      </View>
    </View>
  );
};

const styless = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    height: 125,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: 'bold',
    width: 250,
  },
});

export default ResultsDetail;

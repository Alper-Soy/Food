import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id');

  console.log(result);

  const getResults = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResults(id);
  }, []);

  if (!result) return null;

  return (
    <>
      <Text style={styless.text}>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styless.image} source={{ uri: item }} />;
        }}
      />
    </>
  );
};

const styless = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
    borderRadius: 4,
    marginBottom: 5,
    marginLeft: 10,
  },
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    backgroundColor: '#F0EEEE',
    // marginLeft: 10,
  },
});

export default ResultsShowScreen;

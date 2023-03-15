import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PitchCard = ({ pitch }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{pitch.title}</Text>
      <Text style={styles.description}>{pitch.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#777',
  },
});

export default PitchCard;
import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const PitchCard = ({ pitch }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.boxTitle}>
        <Text style={styles.title}>{pitch.title}</Text>
          <TouchableOpacity
             onPress={() => navigation.navigate('PitchEdit', { pitch })}
          >
          <Ionicons name="pencil-sharp" size={25} color="#20C9B9" />
         </TouchableOpacity>
      </View>
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
  boxTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
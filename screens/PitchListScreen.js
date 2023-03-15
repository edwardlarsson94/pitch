import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import PitchCard from '../components/PitchCard';
import pitchStorage from '../storage/pitchStorage';

const PitchListScreen = () => {
  const [pitches, setPitches] = useState([]);
  const navigation = useNavigation();

  const loadPitches = async () => {
    const storedPitches = await pitchStorage.getPitches();
    setPitches(storedPitches);
  };

  useFocusEffect(
    useCallback(() => {
      loadPitches();
      return () => {};
    }, []),
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={pitches}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('PitchView', { pitch: item })}
          >
            <PitchCard pitch={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.pitchList}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('PitchCreate')}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  pitchList: {
    padding: 20,
  },
  addButton: {
    backgroundColor: '#20C9B9',
    position: 'absolute',
    right: 30,
    bottom: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  addButtonText: {
    fontSize: 36,
    color: '#FFFFFF',
  },
});

export default PitchListScreen;

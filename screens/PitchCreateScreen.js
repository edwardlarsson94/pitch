import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PitchForm from '../components/PitchForm';
import pitchStorage from '../storage/pitchStorage';

const PitchCreateScreen = () => {
  const navigation = useNavigation();

  const createPitch = async (title, description, problem, solution) => {
    if (title && description && problem && solution) {
      const newPitch = {
        id: Date.now().toString(),
        title,
        description,
        problem,
        solution,
      };

      await pitchStorage.addPitch(newPitch);
      navigation.navigate('PitchList');
    }
  };

  return (
    <View style={styles.container}>
      <PitchForm onSubmit={createPitch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
});

export default PitchCreateScreen;

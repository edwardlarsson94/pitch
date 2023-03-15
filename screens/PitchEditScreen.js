import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import PitchForm from '../components/PitchForm';
import pitchStorage from '../storage/pitchStorage';

const PitchEditScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [pitch, setPitch] = useState(null);

  useEffect(() => {
    const loadPitch = async () => {
      const allPitches = await pitchStorage.getPitches();
      const pitchToEdit = allPitches.find(p => p.id === route.params.pitch.id);
      setPitch(pitchToEdit);
    };
  
    loadPitch();
  }, []);

  const editPitch = async (title, description) => {
    if (title && description) {
      const updatedPitch = {
        ...pitch,
        title,
        description,
      };

      await pitchStorage.updatePitch(updatedPitch);
      navigation.navigate('PitchList');
    }
  };

  if (!pitch) {
    return null;
  }

  return (
    <View style={styles.container}>
      <PitchForm onSubmit={editPitch} initialValues={pitch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
});

export default PitchEditScreen;
import { View } from 'react-native'
import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import pitchStorage from '../storage/pitchStorage';
import PitchView from '../components/PitchView';


export default function PitchViewScreen() {
  const route = useRoute();
  const [pitches, setPitches] = useState([]);

  useEffect(() => {
    const loadPitch = async () => {
      const allPitches = await pitchStorage.getPitches();
      const pitchToEdit = allPitches.find(p => p.id === route.params.pitch.id);
      setPitches(pitchToEdit);
    };
  
    loadPitch();
  }, []);

  return (
    <View>
      <PitchView pitch = {pitches}/>
    </View>
  )
}
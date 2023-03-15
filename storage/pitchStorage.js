import AsyncStorage from '@react-native-async-storage/async-storage';

const PITCHES_STORAGE_KEY = 'pitches';

const getPitches = async () => {
  try {
    const storedPitches = await AsyncStorage.getItem(PITCHES_STORAGE_KEY);
    if (storedPitches === null) {
      return [];
    }
    return JSON.parse(storedPitches);
  } catch (error) {
    console.error('Error loading pitches:', error);
    return [];
  }
};

const savePitches = async (pitches) => {
  try {
    await AsyncStorage.setItem(PITCHES_STORAGE_KEY, JSON.stringify(pitches));
  } catch (error) {
    console.error('Error saving pitches:', error);
  }
};

const addPitch = async (newPitch) => {
  const pitches = await getPitches();
  pitches.push(newPitch);
  await savePitches(pitches);
};

const updatePitch = async (updatedPitch) => {
  const pitches = await getPitches();
  const pitchIndex = pitches.findIndex((pitch) => pitch.id === updatedPitch.id);
  if (pitchIndex >= 0) {
    pitches[pitchIndex] = updatedPitch;
    await savePitches(pitches);
  }
};

const deletePitch = async (pitchId) => {
  const pitches = await getPitches();
  const filteredPitches = pitches.filter((pitch) => pitch.id !== pitchId);
  await savePitches(filteredPitches);
};

export default {
  getPitches,
  addPitch,
  updatePitch,
  deletePitch,
};

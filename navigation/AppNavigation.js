import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PitchListScreen from '../screens/PitchListScreen';
import PitchCreateScreen from '../screens/PitchCreateScreen';
import PitchEditScreen from '../screens/PitchEditScreen';
import PitchViewScreen from '../screens/PitchViewScreen';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PitchList" component={PitchListScreen} options={{ title: 'Mis Pitch' }} />
      <Stack.Screen name="PitchCreate" component={PitchCreateScreen} options={{ title: 'Crear Pitch' }} />
      <Stack.Screen name="PitchEdit" component={PitchEditScreen} options={{ title: 'Editar Pitch' }} />
      <Stack.Screen name="PitchView" component={PitchViewScreen} options={{ title: 'Ver Pitch' }} />
    </Stack.Navigator>
  );
};

export default AppNavigation;

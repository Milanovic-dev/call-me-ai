import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import CallScreen from '../screens/CallScreen';
import { Character } from '../types/domain';

export type RootStackParamList = {
  Home: undefined;
  Call: { character: Character };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Call Me AI' }}
      />
      <Stack.Screen
        name="Call"
        component={CallScreen}
        options={{ title: 'Call' }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default RootNavigator;

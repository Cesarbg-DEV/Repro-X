import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import AppNavigator from './app/Navigation/AppNavigator';
import AudioProvider from './app/Context/AudioProvider';

export default function App() {
  return (
    <AudioProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AudioProvider>
  );
}


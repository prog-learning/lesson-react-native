import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NativeBaseProvider, Button, Input } from 'native-base';

/* react-navigation を使用 */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/screens/Home';
import { LessonScreen } from './src/screens/Lesson';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Lesson' component={LessonScreen} />
        </Stack.Navigator>
        <StatusBar style='auto' />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

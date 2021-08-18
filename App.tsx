import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { NativeBaseProvider, Button } from 'native-base';
import styled from 'styled-components/native';

export default function App() {
  return (
    <NativeBaseProvider>
      <StyledView>
        <StatusBar style='auto' />
        <StyledText>Hello world!!</StyledText>
        <Button onPress={() => alert('Are you ready??')}>PUSH</Button>
      </StyledView>
    </NativeBaseProvider>
  );
}

const StyledText = styled.Text`
  color: red;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;
const StyledView = styled.View`
  background-color: skyblue;
  height: 100%;
  color: red;

  display: flex;
  justify-content: center;
  align-items: center;
`;

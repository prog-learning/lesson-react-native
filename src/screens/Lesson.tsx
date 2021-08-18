import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Alert, TextInput } from 'react-native';
import { Button, Input } from 'native-base';
import styled from 'styled-components/native';
import { StackNavigationProp } from '@react-navigation/stack';

export const LessonScreen = ({
  navigation,
}: {
  navigation: StackNavigationProp<any>;
}) => {
  const [text, onChangeText] = React.useState('');
  return (
    <StyledView>
      <StyledText>Hello world!!</StyledText>
      <Button onPress={() => alert('Are you ready??')}>PUSH</Button>
      <StyledTextInput
        placeholder='テキストを入力'
        onChangeText={onChangeText}
        value={text}
      />
      <StyledInput
        w='80%' // ここで書かないとFocus時にスタイルが当たらない
        my='20px'
        placeholder='テキストを入力'
        onChangeText={onChangeText}
        value={text}
      />
      <Button onPress={() => navigation.navigate('Home')}>Go Home page</Button>
    </StyledView>
  );
};

const StyledText = styled.Text`
  color: red;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;
const StyledView = styled.View`
  background-color: skyblue;
  color: red;

  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledTextInput = styled.TextInput`
  border: 2px solid green;
  padding: 8px 12px;
  border-radius: 8px;
  margin: 12px auto;
`;
const StyledInput = styled(Input)`
  background-color: #eee;
`;

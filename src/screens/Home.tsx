import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'native-base';
import { StackNavigationProp } from '@react-navigation/stack';

export const HomeScreen = ({
  navigation,
}: {
  navigation: StackNavigationProp<any>;
}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lime',
      }}
    >
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.navigate('Lesson')}>
        Go Lesson page
      </Button>
    </View>
  );
};

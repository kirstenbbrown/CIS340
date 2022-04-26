import React from 'react';
import { View } from 'react-native';

export default function App() {
  return (
    <View>
      <View style={{width: 50, height: 50, backgroundColor: 'red'}}/>
      <View style={{width: 100, height: 100, backgroundColor: 'blue'}}/>
      <View style={{width: 200, height: 200, backgroundColor: 'purple'}}/>
      <View style={{width: 400, height: 400, backgroundColor: 'orange'}}/>
    </View>
  );
}

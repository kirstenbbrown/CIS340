import React from 'react';
import { View } from 'react-native';

export default function App() {
  return (
    <View style={{flex:1}}> //if did height: 300 would not span the entire screen
      <View style={{flex: 1, backgroundColor: 'red'}}/>
      <View style={{flex: 2, backgroundColor: 'blue'}}/>
      <View style={{flex: 3, backgroundColor: 'purple'}}/> //smalller flex means smaller space. same flex size means equal sizes
      <View style={{flex: 3, backgroundColor: 'orange'}}/>
   </View>
  );
}

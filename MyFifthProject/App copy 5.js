import React from 'react';
import { View } from 'react-native';

export default function App() {
  return (
    <View style={{flex:1, 
    flexDirection: 'row',
    justifyContent: 'space-evenly'}}>  //adjusts it depending on flexdirection // center, space-evenly, space-between, flex-end, flex-start
      <View style={{width:50, height: 50, backgroundColor: 'teal'}}/>
      <View style={{width:50, height: 50, backgroundColor: 'blue'}}/>
      <View style={{width:50, height: 50, backgroundColor: 'purple'}}/> 
      <View style={{width:50, height: 50, backgroundColor: 'pink'}}/>
   </View>
  );
}

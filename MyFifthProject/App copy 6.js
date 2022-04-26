import React from 'react';
import { View } from 'react-native';

export default function App() {
  return (
    <View style={{flex:1, 
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'}}>  //stretch has no effect if width is set, center (does not show if width), baseline (if width not displayed)
      <View style={{width: 50, height: 50, backgroundColor: 'teal'}}/>
      <View style={{width:50, height: 50, backgroundColor: 'blue'}}/>
      <View style={{height: 50, backgroundColor: 'purple'}}/> 
      <View style={{width: 50,height: 50, backgroundColor: 'pink'}}/>
   </View>
  );
}

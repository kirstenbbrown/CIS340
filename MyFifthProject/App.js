import React from 'react';
import { View } from 'react-native';

export default function App() {
  return (
    <View style={{flex:1, //container
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'baseline'}}> 
      <View style={{width: 50, height: 50, backgroundColor: 'teal', alignSelf: 'flex-end'}} />
      <View style={{width:50, height: 50, backgroundColor: 'blue', alignSelf: 'flex-start'}}/>
      <View style={{height: 50, backgroundColor: 'purple', alignSelf: 'stretch'}}/> 
      <View style={{width: 50,height: 50, backgroundColor: 'pink', alignSelf: 'center'}}/>
   </View>
  );
}

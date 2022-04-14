import React from 'react';
import { Text, TextInput, View } from 'react-native';

 function Student(properties) {
  return (
    <View >
      <Text>Hey. My name is {properties.name}. I am a student in CIS340!</Text>
    </View>
  );
}

export default function MultiComp(){
  return(
<View style = {{
  flex: 1,
  justifyContent: "center",
  alignItems: "center"
}}

>
  <Text> Welcome to CIS340</Text>
  <Student name = "Kirsten Brown"/>
  <Student name = "Tommy Nelson"/>
  <Student name = "Mati Humphreys"/>
  <Student name = "Julia ######"/>
  <Student name = "Alex Sung"/>

</View>
  );
}
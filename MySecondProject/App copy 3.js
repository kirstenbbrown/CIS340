
import React from 'react';
import { Text, TextInput, View } from 'react-native'; 

export default function MyApp() { //lets us write elements inside a java script
  
  
 
  return (
    <View>
      <Text>
        {"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"}
        Hello, I am a student in CIS340! {"\n"}
       </Text>
      <TextInput 
      style = {{
        height: 40,
        borderColor: "blue",
        borderWidth: 5
      }}
      defaultValue= "Enter Your Input"/> 
      </View>
    
  );
}
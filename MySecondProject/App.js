
import React from 'react';
import { Text, TextInput, View } from 'react-native'; 

function MyApp() { //lets us write elements inside a java script
  
  return (
    <View>
      <Text>
         Hello, I am a student in CIS340!
       </Text>
      </View>
    
  );
}

export default function MultiComp(){
  return(
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}
    >
      <Text>  Welcome to my class! </Text>
      <MyApp />
      <MyApp />
      <MyApp />
      <MyApp />
    </View>
  );
}
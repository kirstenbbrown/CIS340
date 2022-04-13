
import React from 'react';
import { Text } from 'react-native'; 

export default function MyApp() { //lets us write elements inside a java script
  
  function getFullName(fName, mName, lName){
    return fName + " " + mName + " " + lName;
  }
  
  const pet = "Dog";
  return (
      <Text>
        {"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"}
        Hello, I am a student in CIS340! {"\n"}
        My full name is {getFullName("Kirsten", "Brooke", "Brown")}{"\n"}
        I have a {pet}!
      </Text>
    
  );
}
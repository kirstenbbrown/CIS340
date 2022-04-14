import React from 'react';
import { Text, TextInput, Image, View } from 'react-native';

 export default function MyDog() {

 let pic = {
   url: 'https://github.com/kirstenbbrown/CIS340/blob/main/download.jpg'
 }

  return (
    <View style = {{
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }}
    
    >
     <Image source= {pic}
     style = {{width: 200, height: 200}}
     />
     <Text>Hello, this is my dog.</Text>
    </View>
  );
}


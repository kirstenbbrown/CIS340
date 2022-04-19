import React from 'react';
import { Text, Image, ScrollView } from 'react-native';

export default function MyScrollViewApp() {
  const dog = {
    uri: 'https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp',
    width: 64,
    height: 64
  }
  return (
    <ScrollView style={{padding: 40}}>
      <Text style= {{fontsize: 180}}> Try to scroll down </Text>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Text style= {{fontsize: 80}}> Try to scroll down again </Text>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Text style= {{fontsize: 80}}> Try to scroll down again </Text>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Text style= {{fontsize: 80}}> DOWN! </Text>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Text style= {{fontsize: 80}}> Try to scroll down again </Text>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Text style= {{fontsize: 80}}> DOWN! </Text>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Text style= {{fontsize: 80}}> Try to scroll down again </Text>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Text style= {{fontsize: 80}}> DOWN! </Text>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
      <Image source={dog}/>
    </ScrollView>
    
  );

}


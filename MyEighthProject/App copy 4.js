import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker'; //import

export default function App() {

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false){
      alert('Permission is required');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
  }
  //end of the code

  return (
    <View style={styles.container}>
     <Image source={{uri: 'https://brand.colostate.edu/wp-content/uploads/sites/47/2019/01/CSU-Ram-357-617.png'}}
         style= {styles.logo}/>

      <Text style={styles.instructions}>
        Press the button below to select an image on your phone!
      </Text>
     
      <TouchableOpacity
        style={styles.button}
        onPress= {openImagePickerAsync}
        >
          <Text style={styles.buttonText}>Pick Image</Text>

      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
  },

  button: {
    
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 5,

  },

   instructions: {
     fontSize: 18,
     color: 'gold',
     marginHorizontal: 15,
     marginBottom: 10,
   },

   logo: {
     width: 325,
     height: 335,
     marginBottom: 15,
   },

   buttonText: {
     fontSize: 20,
     color: 'white',
   }
});

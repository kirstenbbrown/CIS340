import { React } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

export default function App() {

  const csuLogo = {
    uri: "https://brand.colostate.edu/wp-content/uploads/sites/47/2019/01/Ram-Logo-Pantone-375-768x768.jpg",
    width: 80,
    height: 80
  };

  return (
    <View style={styles.container}>
      <Image
      style={styles.localCSULogo}
      source={require('./assets/Logo.jpg')}
       />

       <Image 
       style={styles.urlCSULogo}
       source={{
         uri: "https://brand.colostate.edu/wp-content/uploads/sites/47/2019/01/Ram-Logo-Pantone-375-768x768.jpg"
       }}
       />

       <Image 
       style={styles.stretch}
       source={csuLogo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
  },

  localCSULogo: {
    width: 55,
    height: 65,
  },

  urlCSULogo: {
    width: 50,
    height: 50,
  },

  stretch: {
    width: 80,
    height: 80,
    resizeMode: 'stretch', //cover, contain, center
  }
});

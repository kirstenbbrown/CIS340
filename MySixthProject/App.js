import { React } from 'react';
import { StyleSheet, Text, ImageBackground, View } from 'react-native';

export default function App() {

  const csuLogo = {
    uri: "https://brand.colostate.edu/wp-content/uploads/sites/47/2019/01/Ram-Logo-Pantone-375-768x768.jpg",
   
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={csuLogo} 
      style={styles.image}>
      
        <Text  style={styles.text}> CSU Logo</Text>
        
       </ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },

  text: {
    color: "red",
    fontSize: 40,
    fontWeight: "bold",
  },

 
});

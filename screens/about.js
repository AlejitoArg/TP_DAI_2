import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Image, Vibration } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

const About = ({navigation}) => {
  const [mostrarQR, setMostrarQR] = useState(true);

  useEffect(async() => {
      const permiso = await BarCodeScanner.requestPermissionsAsync();
      if(permiso.status != "granted"){
        console.error("Permiso denegado")
        Vibration.vibrate()
        alert("Permiso denegado")
        navigation.navigate("Home")
      }
  }, []);

  const alertar = (alertar) => {
    alert(alertar.data);
    setMostrarQR(true)
  };

  if(mostrarQR)return (
    <View style={styles.container}>
        <Image style={styles.image} source={require('../assets/qrcode.png')} />
        <Button title="Escanear codigo QR" onPress={() => setMostrarQR(false)} />
    </View>
  );

  return (
        <BarCodeScanner
            onBarCodeScanned={alertar}
            style={StyleSheet.absoluteFillObject}
        />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  image:{
    width:400,
    height:400
  },
  boton: {
    marginTop:800
  }
});

export default About
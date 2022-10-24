import {useEffect, useState} from "react";
import { SafeAreaView, StyleSheet, Button, Text, View, FlatList} from "react-native";
import { ActionTypes, useContextState } from "../contextState";
import { BarCodeScanner } from 'expo-barcode-scanner';
const axios = require('axios');

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Juan',
    phone_number: "12345678",
    emergency_number: "SI"
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Juana',
    phone_number: "12345679",
    emergency_number: "NO"
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Juanita',
    phone_number: "22345678",
    emergency_number: "NO"
  },
];

const Item = (item) => (
  <View style={styles.item}>
    <Text style={styles.title}>{item.title + item.value}</Text>
  </View>
);

const añadirContactos = ({navigation}) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  const Separator = () => (
    <View style={styles.separator} />
  );

  const renderItem = ({ item }) => (
    <>
      <Item title={"Nombre: "} value={item.name} />
      <Item title={"Numero de telefono: "} value={item.phone_number} />
      <Item title={"Es contacto de Emergencia: "} value={item.emergency_number} />
      <Button
        title="Press me"
        onPress={() => console.log("Boton presionado")}
      />
      <Separator />
    </>
  );
  
  return (
    <SafeAreaView style={styles.body}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Button
        title="Añadir Contacto"
        onPress={() => navigation.navigate("añadirContacto")}
      />
    </SafeAreaView>
    
  );
};

{/* Estilos */}

const styles = StyleSheet.create({
  body: {
    paddingTop: 30,
    margin:10
  },
});
export default añadirContactos;
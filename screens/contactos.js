import {useEffect, useState} from "react";
import { SafeAreaView, StyleSheet, Button, Text, View, FlatList} from "react-native";
import { ActionTypes, useContextState } from "../contextState";
import { BarCodeScanner } from 'expo-barcode-scanner';
import obtenerContactos from "../components/obtenerContactos"
const axios = require('axios');

const Contactos = ({navigation}) => {
  console.log(obtenerContactos())
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const { contextState, setContextState } = useContextState();
  const DATA = contextState.contactos;

  const Item = (item) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title + item.value}</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <>
      <Item title={"Nombre: "} value={item.name} />
      <Item title={"Numero de telefono: "} value={item.phone_number} />
      <Item title={"Es contacto de Emergencia: "} value={item.emergency_number} />
      <View style={styles.separator}/>
    </>
  );
  
  return (
    <SafeAreaView style={styles.body}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
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
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
export default Contactos;
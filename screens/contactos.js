import {useEffect, useState} from "react";
import { SafeAreaView, StyleSheet, Button, Text, View, FlatList} from "react-native";
import { ActionTypes, useContextState } from "../contextState";
import { BarCodeScanner } from 'expo-barcode-scanner';
const axios = require('axios');

const Contactos = ({navigation}) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const { contextState, setContextState } = useContextState();
  const DATA = contextState.contactos;

  const Item = (item) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title + item.value}</Text>
    </View>
  );

  const eliminarContacto = (id) =>{
    setContextState({
      type: ActionTypes.BorrarContacto,
      value: {
        id: id
      }
    })
  }

  const renderItem = ({ item }) => (
    <>
      <Item title={"Nombre: "} value={item.name} />
      <Item title={"Numero de telefono: "} value={item.phone_number} />
      <Item title={"Es contacto de Emergencia: "} value={item.emergency_number} />
      <Button
        title="Eliminar contacto"
        onPress={() => eliminarContacto(item.id)}
      />
    </>
  );
  
  return (
    <SafeAreaView style={styles.body}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <View style={styles.separator}/>
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
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
export default Contactos;
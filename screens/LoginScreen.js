import {useEffect, useState} from "react";
import { SafeAreaView, StyleSheet, Button, Text, View, FlatList} from "react-native";
import { ActionTypes, useContextState } from "../contextState";
const axios = require('axios');

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'First Item',
    phone_number: "12345678",
    emergency_number: "SI"
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Second Item',
    phone_number: "12345679",
    emergency_number: "NO"
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Third Item',
    phone_number: "22345678",
    emergency_number: "NO"
  },
];

const Item = (item) => (
  <View style={styles.item}>
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.title}>{item.name}</Text>
  </View>
);

const LogIn = ({navigation}) => {

  const Separator = () => (
    <View style={styles.separator} />
  );

  const renderItem = ({ item }) => (
    <>
      <Item title={"Nombre: "} value={item.name} />
      <Item title={"Numero de telefono: "} value={item.name} />
      <Item title={"Es contacto de Emergencia: "} value={item.name} />
      <Button
        title="Press me"
        onPress={() => console.log("Boton presionado")}
      />
      <Separator />
    </>
  );


  {/* Devolver lo que se muestra (frontend) */}
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
export default LogIn;
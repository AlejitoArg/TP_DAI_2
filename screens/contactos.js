import {useEffect, useState} from "react"
import { SafeAreaView, StyleSheet, Button, Text, View, FlatList, Vibration} from "react-native"
import * as Contacts from 'expo-contacts'
const axios = require('axios')
import AsyncStorage from "@react-native-async-storage/async-storage"

const Contactos = ({navigation}) => {
  const [hasPermission, setHasPermission] = useState(null)
  const [contactos, setContactos] = useState([])
  const [contactoEmergencia, setContactoEmergencia] =  useState()
  useEffect(async()=>{
    const permission= await Contacts.requestPermissionsAsync()

    if(permission.status == 'granted') {
    const contacts = await Contacts.getContactsAsync()
    setContactos(contacts.data)
    const ContactoEmergencia = await AsyncStorage.getItem("contactoEmergencia")
    setContactoEmergencia(ContactoEmergencia)
    }
    else {
      console.error("Permiso denegado")
      Vibration.vibrate()
      alert("Permiso denegado")
      navigation.navigate("Home")
    }
  }, [])

  const Item = (item) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title + item.value}</Text>
    </View>
  )

  const EmergencyContact = (item) => {
    if(item.id1==item.id2)return(
      <Text>✔</Text>
    )
  }

  const renderItem = ({ item }) => (
    <>
      <Item title={"Nombre: "} value={item?.name} />
      <Item title={"Numero de telefono: "} value={item?.phoneNumbers[0].number} />
      <EmergencyContact id1={item.id} id2={contactoEmergencia}/>
      <View style={styles.separator}/>
    </>
  )
  
  return (
    <SafeAreaView style={styles.body}>
      <FlatList
        data={contactos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>   
  )
}

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
})
export default Contactos
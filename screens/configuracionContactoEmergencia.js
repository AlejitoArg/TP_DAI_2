import { useEffect, useState } from 'react'
import { Text, StyleSheet, FlatList, View, Vibration } from "react-native"
import * as Contacts from "expo-contacts"
import AsyncStorage from "@react-native-async-storage/async-storage"

const configuracionContactoEmergencia = ({ navigation }) => {
  const [contacts, setContacts] = useState([])
  const [emergencyContact, setEmergencyContact] = useState("")

  useEffect(async() => {
    const permiso = await Contacts.requestPermissionsAsync()
    if (permiso.status != "granted") {
      console.error("Permiso denegado")
      Vibration.vibrate()
      alert("Permiso denegado")
      navigation.navigate("Home")
    }
      const contactos = await Contacts.getContactsAsync()
      setContacts(contactos.data)
      const contactoEmergencia = await AsyncStorage.getItem("contactoEmergencia")
      setEmergencyContact(contactoEmergencia)
  }, [])

  const renderItem = ({ item }) => {
    return (
      <View>
        <Text
          onPress={() => {
            AsyncStorage.setItem("contactoEmergencia", item.id)
            navigation.navigate("Home")
          }}
        >
          {item.name}{item.id === emergencyContact ? " // Contacto de emergencia" : ""}
        </Text>
        <View style={styles.separator}/>
      </View>
    )
  }

  return (
    <FlatList
      data={contacts}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  )
}

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
export default configuracionContactoEmergencia
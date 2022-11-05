import { StyleSheet, Text, View, Vibration } from "react-native"
import {useState, useEffect} from 'react'
import * as Location from 'expo-location'
import axios from "axios"

const Clima = () => {
  const [clima, setClima] = useState()
  useEffect(async() => {
        let permiso = await Location.requestForegroundPermissionsAsync()
        if (permiso.status != 'granted') {
            console.error("Permiso denegado")
            Vibration.vibrate()
            alert("Permiso denegado")
            navigation.navigate("Home")
        }
        const location = await Location.getCurrentPositionAsync()
        axios.get(`http://api.weatherapi.com/v1/forecast.json?key=78de78fae69949f2986200912220508&q=${location.coords.latitude},${location.coords.longitude}`)
        .then(response=>{
            setClima(response?.data)
        })
        .catch(response=>{
            console.error(response)
            Vibration.vibrate()
        })
  }, [])

  return (
    <>
        <Text>Temperatura actual: {clima?.current.temp_c}</Text>
        <Text>Fecha y hora: {clima?.current.last_updated}</Text>
        <Text>Ubicacion: {clima?.location.name}</Text>
    </>
  )
}

export default Clima
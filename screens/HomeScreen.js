import { StyleSheet, View, Text, ScrollView, TextInput, FlatList, TouchableOpacity, Image } from "react-native"
import React from "react"
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper'
const axios = require('axios')

const HomeScreen = ({ navigation }) => {
    const DATA = [
        {
          id: '1',
          pageTo: 'contactos',
          title: "Ver contactos",
          img: "https://img.icons8.com/windows/512/contacts.png"
        },
        {
          id: '2',
          pageTo: 'configuracionContactoEmergencia',
          title: "Contacto de emergencia",
          img: "https://cdn-icons-png.flaticon.com/512/7604/7604461.png"
        },
        {
            id: '3',
            pageTo: 'clima',
            title: "Ver clima",
            img: "https://cdn-icons-png.flaticon.com/512/129/129023.png"
        },
        {
            id: '4',
            pageTo: 'about',
            title: "Acerca de",
            img: "https://i.pinimg.com/originals/8a/7d/96/8a7d9602ffdac086bf7844dc3b605f30.png"
        },
    ]

    const card = ({item})=>(
        <TouchableOpacity
            onPress={()=>{navigation.navigate(item.pageTo)}}
            style={styles.Button}>
            <Image
                style={styles.image}
                source={{uri: item.img}}
            />
            <Text>{item.title}</Text>
        </TouchableOpacity>
    )
    return (
        <FlatList
            data={DATA}
            renderItem={card}
            keyExtractor={item => item.id}
        />
        
    )
}

const styles = StyleSheet.create({
    body: {
        paddingTop: 20,
        flex: 1,
    },
    Button: {
        marginTop: 15,
        width: 170,
        height: 170,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto",
        fontSize: 20,
        color: "black",
        fontWeight: "bold"
    },
    image: {
        width: 92,
        height: 92,
    }

})

export default HomeScreen
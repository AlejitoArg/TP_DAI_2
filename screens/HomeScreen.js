import { StyleSheet, View, Text, ScrollView, TextInput, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
const axios = require('axios');
import {useContextState } from "../contextState";

const HomeScreen = ({ navigation }) => {
    const DATA = [
        {
          id: '1',
          pageTo: 'contactos',
          title: "Ver contactos",
          img: "../images/contacts.png"
        },
        {
          id: '2',
          pageTo: 'Juanita',
          title: "Juanita",
        },
    ];

    const card = ({item})=>(
        <TouchableOpacity
            onPress={()=>{navigation.navigate(item.pageTo)}}
            style={styles.Button}>
            <Image
                style={styles.image}
                source={require("../images/contacts.png")}
            />
            {item.title}
        </TouchableOpacity>
    )
    return (
        <FlatList
            data={DATA}
            renderItem={card}
            keyExtractor={item => item.id}
        />
        
    );
};

const styles = StyleSheet.create({
    body: {
        paddingTop: 20,
        flex: 1,
    },
    roundButton2: {
        marginTop: 20,
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        border: "5px solid #e485eb",
        borderRadius: 100,
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto",
        fontSize: 20,
        fontFamily: "Lucida Console",
        color: "black",
        fontWeight: "bold"
    },
    roundButton3: {
        marginTop: 15,
        width: 170,
        height: 170,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        border: "5px solid #38a3f9",
        borderRadius: 100,
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto",
        fontSize: 20,
        fontFamily: "Lucida Console",
        color: "black",
        fontWeight: "bold"
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
        fontFamily: "Lucida Console",
        color: "black",
        fontWeight: "bold"
    },
    roundButton5: {
        marginBottom: 100,
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        border: "5px solid blue ",
        borderRadius: 100,
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto",
        fontSize: 20,
        fontFamily: "Lucida Console",
        color: "black",
        fontWeight: "bold"
    },
    image: {
        width: 92,
        height: 92,
    }

});

export default HomeScreen;
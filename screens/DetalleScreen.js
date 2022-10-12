import React, { useEffect, useState } from "react";
import { ActionTypes, useContextState } from "../contextState";
import { View, Image, StyleSheet, Text, Button } from 'react-native';
const axios = require('axios');

const Detalle = ({ navigation }) => {
    const { contextState, setContextState } = useContextState();
    const [plato, onChangePlato] = useState();
    let vegano;
    const guardar = () =>{
        if(contextState?.platoSeleccionado?.onMenu){
            setContextState({
                type: ActionTypes.DeleteMenu,
                value: plato
              })
        }else{
            setContextState({
                type: ActionTypes.SetMenu,
                value: plato
              })
        }
        navigation.navigate("Home")
    }
    const styles = StyleSheet.create({
        platoImagen: {
            width: 100,
            height: 100,
            flex: 1,
        },
        card:{
            margin:10,
            padding:10,
            backgroundColor:"#9B9B9B",
            borderRadius: 10
        }
        });

        useEffect(()=>{            
            axios.get(`https://api.spoonacular.com/recipes/${contextState?.platoSeleccionado?.id}/information?apiKey=5fbfaca6af9949e48de98190593f70f9`)
            .then(function (response) {
                console.log(response.data)
                onChangePlato(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
        },[])
        if(plato?.vegan){
            console.log(plato)
            vegano="si"
            console.log(plato)
        }else{
            console.log(plato)
            vegano="no"
            console.log(plato)
        }
    return (
        <View style={[styles.card, {
            flexDirection: "row"
          }]}>
            <View style={{flex:1}}>
                <Image
                    style={styles.platoImagen}
                    source={{
                        uri: plato?.image,
                    }}
                />
            </View>
            <View style={{flex:2}}>
                <Text style={styles.title}>{plato?.title}</Text>
                <Text>Vegano: {vegano}</Text>
                <Text>Precio: {plato?.pricePerServing}</Text>
                <Text>Health score: {plato?.healthScore}</Text>
                    <Button
                        onPress={guardar}
                        title={contextState?.platoSeleccionado?.textoBoton}
                        color="#655ea3"
                        style={styles.boton}
                        accessibilityLabel="Learn more about this purple button"
                    />
            </View>
        </View>
    );
}
export default Detalle;
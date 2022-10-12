import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ActionTypes, useContextState } from "../contextState";
import { View, Image, StyleSheet, Text, Button } from 'react-native';
const axios = require('axios');

const Plato = (props) => {
    const { contextState, setContextState } = useContextState();
    const navigation = useNavigation()
    const guardar = () =>{
        setContextState({
            type: ActionTypes.SetPlatoSeleccionado,
            value: props
          })
        navigation.navigate("Detalle")
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
        },
        title: {
            marginBottom:10
        }
      });

    return (
        <View style={[styles.card, {
            flexDirection: "row"
          }]}>
            <View style={{flex:1}}>
                <Image
                    style={styles.platoImagen}
                    source={{
                        uri: props?.imagen,
                    }}
                />
            </View>
            <View style={{flex:2}}>
                <Text style={styles.title}>{props?.nombre}</Text>
                <Text>{props?.desc}</Text>
                    <Button
                        onPress={guardar}
                        title={"Ver más"}
                        color="#655ea3"
                        style={styles.boton}
                        accessibilityLabel="Learn more about this purple button"
                    />
            </View>
        </View>
    );
}
export default Plato;
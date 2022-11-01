import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import * as Contacts from 'expo-contacts';
import {useState, useEffect} from 'react';

export default getContactos = () =>{
const [contactos, setContactos] = useState([]);
useEffect(()=>{
    (async () => {
        const {status}= await Contacts.requestPermissionsAsync();

        if(status === 'granted') {
        const {data}= await Contacts.getContactsAsync({
            fields: [Contacts.Fields.FirstName, Contacts.Fields.LastName, Contacts.Fields.PhoneNumbers]
        });

        if(data.length > 0){
            console.log(data);
            setContactos(data);
        }
        else{
            setError("No se han encontrado contactos")
        }
        }
        else {
        setError("Permiso denegado");
        }
    })
    ()
    }, [])
    return contactos
}

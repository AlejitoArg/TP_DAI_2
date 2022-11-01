import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import contactos from './contactos';
import HomeScreen from './HomeScreen.js';
import DetalleScreen from './DetalleScreen.js';
import configuracionContactoEmergencia from './configuracionContactoEmergencia.js';

const Stack = createNativeStackNavigator();

export default function MyStack(){
    return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={HomeScreen}
        />
        <Stack.Screen
            name="contactos"
            component={contactos}
        />
        <Stack.Screen
            name="configuracionContactoEmergencia"
            component={configuracionContactoEmergencia}
        />
        <Stack.Screen
            name="Detalle"
            component={DetalleScreen}
        />
        </Stack.Navigator>
    </NavigationContainer>
    );
};
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import contactos from './contactos';
import HomeScreen from './HomeScreen.js';
import DetalleScreen from './DetalleScreen.js';

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
            name="añadirContacto"
            component={contactos}
        />
        <Stack.Screen
            name="Detalle"
            component={DetalleScreen}
        />
        </Stack.Navigator>
    </NavigationContainer>
    );
};
import React, { useContext } from "react"

export const initialState = {
    contactos:[{
        id: '1',
        name: 'Juan',
        phone_number: "12345678",
        emergency_number: "SI"
      },
      {
        id: '2',
        name: 'Juana',
        phone_number: "12345679",
        emergency_number: "NO"
      },
      {
        id: '3',
        name: 'Juanita',
        phone_number: "22345678",
        emergency_number: "NO"
      }]
}

export const ActionTypes = {
    añadirContacto: "AÑADIR_CONTACTO",
    BorrarContacto: "BORRAR_CONTACTO",
}

export const reducer = (state = {}, action) => {
    let newContactos;
    switch (action.type){
        case ActionTypes.añadirContacto:
            return {
                ...state,
                contactos: [...state.contactos, action.value],
            };
        case ActionTypes.BorrarContacto:
            newContactos = state.contactos.filter(contacto => contacto?.id!=action.value?.id)
            return {
                ...state,
                contactos: newContactos,
            };
        default:
            return state;
    }
}

export const initialContext = {
    contextState:initialState,
    setContextState: () => {},
};

const Cont = React.createContext(initialContext);

export function ContextProvider({ children, initial = initialState}) {
    const [state, dispatch] = React.useReducer(reducer, initial);

    const contextState = state;
    const setContextState = dispatch;

    return <Cont.Provider value={{contextState, setContextState}}>{children}</Cont.Provider>
}

export const useContextState = () => useContext(Cont)
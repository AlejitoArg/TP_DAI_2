import React, { useContext } from "react"

export const initialState = {
    contactos:[]
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
                menu: newContactos,
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
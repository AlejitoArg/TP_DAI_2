import React, { useContext } from "react"

export const initialState = {
    platoSeleccionado: 0,
    gmail: "",
    password: "",
    token: "",
    menu: [],
    healthScore:0,
    price:0
}

let contadorVegano=0;
let contadorNoVegano=0;

export const ActionTypes = {
    SetPlatoSeleccionado: "SET_PLATO_SELECCIONADO",
    SetGmail: "SET_GMAIL",
    SetPassword: "SET_PASSWORD",
    SetToken: "SET_TOKEN",
    SetMenu: "SET_MENU",
    DeleteMenu: "DELETE_MENU"
}

export const reducer = (state = {}, action) => {
    switch (action.type){
        case ActionTypes.SetPlatoSeleccionado:
            return {
                ...state,
                platoSeleccionado: action.value,
            };
        case ActionTypes.SetGmail:
            return {
                ...state,
                gmail: action.value,
            };
        case ActionTypes.SetPassword:
            return {
                ...state,
                password: action.value,
            };
        case ActionTypes.SetToken:
            return {
                ...state,
                token: action.value,
            }
        case ActionTypes.SetMenu:
            console.log(action)
            if(action.value.vegan){
                if(contadorVegano<2){
                    contadorVegano++
                    return {
                        ...state,
                        menu: [...state.menu, action.value],
                        price: state.price + action.value.pricePerServing,
                        healthScore: state.healthScore + action.value.healthScore
                    };
                }else{
                    console.log("No se pueden agregar mas de dos alimentos veganos")
                }
            }else{
                if(contadorNoVegano<2){
                    contadorNoVegano++
                    return {
                        ...state,
                        menu: [...state.menu, action.value],
                        price: state.price + action.value.pricePerServing,
                        healthScore: state.healthScore + action.value.healthScore
                    };
                }else{
                    console.log("No se pueden agregar mas de dos alimentos no veganos")
                }
            }
            return {
                ...state,
                menu: [...state.menu]
            };
        case ActionTypes.DeleteMenu:
            if(action.value.vegan) contadorVegano--
            else contadorNoVegano--
            let newMenu = state.menu.filter(plato => plato?.id!=action.value?.id)
            return {
                ...state,
                menu: newMenu,
                price: state.price - action.value.pricePerServing,
                healthScore: state.healthScore - action.value.healthScore
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
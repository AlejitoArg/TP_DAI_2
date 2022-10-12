import * as React from 'react';
import MyStack from './screens/navigation';
import {ContextProvider } from "./contextState"

const App = () => {
    return (
        <ContextProvider>
            <MyStack/>
        </ContextProvider>
    );
};

export default App;
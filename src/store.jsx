import React, {createContext, useReducer} from 'react';

const initialState = {};
const store = createContext(initialState);
const { Provider } = store;

function deepCopy(s){
    return JSON.parse(JSON.stringify(s));
}

const StateProvider = ( { children } ) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch(action.type) {
            case 'sidebar':
                const newState = deepCopy(state);
                newState.showSidebar = !state.showSidebar;
                console.log('sidebar reducer', newState);
                return newState;
            default:
                throw new Error();
        };
    }, initialState);

    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }
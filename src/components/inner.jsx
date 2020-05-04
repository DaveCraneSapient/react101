import React, { useContext } from 'react';
import { store } from '../store';

function Inner(){

    console.log("render inner");

    const globalState = useContext(store);
    const { dispatch } = globalState;

    function toggleSidebar(){
        dispatch({ type: 'sidebar' });
    }

    return (<div>
        <p>hello</p>
        <button onClick={toggleSidebar}>click me</button>
    </div>);
}

export default Inner;
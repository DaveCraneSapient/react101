import React, { useContext } from 'react';
import { store } from '../store';

function SidebarButton(){

    console.log("render sidebar button");

    const globalState = useContext(store);
    const { dispatch } = globalState;

    function toggleSidebar(){
        dispatch({ type: 'sidebar' });
    }

    return (<div>
        <button onClick={toggleSidebar}>click me</button>
    </div>);
}

export default SidebarButton;
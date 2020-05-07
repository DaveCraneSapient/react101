import React, { useContext } from 'react';
import { store } from '../store';
import config from '../config/config';

function SidebarButton(){

    console.log("render sidebar button");

    const globalState = useContext(store);
    const { dispatch } = globalState;

    function toggleSidebar(){
        dispatch({ type: 'sidebar' });
    }

    return (<div>
        <button onClick={toggleSidebar}>{ config.labels.button }</button>
    </div>);
}

export default SidebarButton;
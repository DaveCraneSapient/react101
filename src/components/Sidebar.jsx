import React, { useContext } from 'react';
import { store } from '../store';
import config from '../config/config';

function Sidebar({ title }) {

    const { state } = useContext(store);
    const showSidebar = state.showSidebar;

    console.log("render sidebar", state);

    return (<>
        { showSidebar && <p>{ config.labels.sidebar }</p> }
        </>);
}

export default Sidebar;
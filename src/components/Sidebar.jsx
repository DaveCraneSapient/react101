import React, { useContext } from 'react';
import { store } from '../store';

function Sidebar({ title }) {

    const { state, dispatch } = useContext(store);
    const showSidebar = state.showSidebar;

    console.log("render sidebar", state);

    return (<>
        { showSidebar && <p>sidebar</p> }
        </>);
}

export default Sidebar;
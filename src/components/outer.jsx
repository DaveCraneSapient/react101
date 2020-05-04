import React, { useContext } from 'react';
import { store } from '../store';
import Inner from './inner';

function Outer({ title }) {

    const { state, dispatch } = useContext(store);
    const showSidebar = state.showSidebar;

    console.log("render outer", state);

    return (<div>
        <h1>{title}</h1>
        <Inner/>
        { showSidebar && <p>sidebar</p> }
    </div>);
}

export default Outer;
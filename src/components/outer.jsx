import React from 'react';
import Inner from './inner';
import Sidebar from './Sidebar';

function Outer({ title }) {

    console.log("render outer");

    return (<div>
        <h1>{title}</h1>
        <Inner/>
        <Sidebar/>
    </div>);
}

export default Outer;
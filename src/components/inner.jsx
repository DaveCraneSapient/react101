import React from 'react';
import SidebarButton from './SidebarButton';

function Inner(){

    console.log("render inner");

    return (<div>
        <p>hello</p>
        <SidebarButton />
    </div>);
}

export default Inner;
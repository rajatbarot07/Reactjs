import React, { useContext } from 'react';
import {data,data1} from '../../App'

function UseContexthook3() {
    const Firstname = useContext(data);
    const Fieldname = useContext(data1);
    return (
        <>
            <h1>Hello {Firstname}</h1>
            <h2>Your Position is {Fieldname} Developer</h2>
        </>
    );
}

export default UseContexthook3;
import { logDOM } from '@testing-library/react';
import React, { useState } from 'react';
import {useRef} from 'react';
function UseRef(props) {
    const Element = useRef();
    const[name,setName] = useState("Rajat");
    console.log(Element);
    const Reset = () =>{
        setName('')
        Element.current.focus()
    }
    const HandleInput = () =>{
        Element.current.style.color="blue"
    }
    return (
        <>
            <h1>useRef</h1>
            <input ref={Element} type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <button onClick={Reset}>Reset</button>
            <button onClick={HandleInput}>Handle input</button>
        </>
    );
}

export default UseRef;
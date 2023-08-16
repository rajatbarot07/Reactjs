import React from 'react';
import { useState } from 'react';

function State(props) {
    const[count,setCount] = useState(0)

    const plus = () =>{
        setCount(count + 1)
    }
    const minus = () =>{
        setCount(count - 1)
    }
    return (
        <>
         <div className="container text-center">
            <div className="row">
                <div className="col mt-5">
                <button className='btn btn-primary' onClick={plus}>Increment</button>
                <h1>{count}</h1>
                <button className='btn btn-primary' onClick={minus}>Decrement</button>
                </div>
            </div>
            </div>   
        </>
    );
}

export default State;
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function Screenwidth(props) {
    const[width,setWidth]=useState(window.screen.width)

    useEffect(()=>{
        window.addEventListener("resize",()=>{
            setWidth(window.innerWidth)
        })
        
    })
    return (
        <>
            <div className="container">
                <div className="row">
                    <h1 className='text-center mt-5'>The Screen width is <span>{width}</span></h1>
                </div>
            </div>
        </>
    );
}

export default Screenwidth;
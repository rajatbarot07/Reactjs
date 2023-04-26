import React from 'react';
import { useState } from 'react';

function Usestate(props) {
    const[varname,setnamevar]=useState(0)
    const IncClick=()=>{
        console.log("Btn Called");
        setnamevar(varname+1)
    }
    let DecClick=()=>{
        console.log("Btn Called");
        setnamevar(varname-1)
    }
    let ResetClick=()=>{
        console.log("Btn Called");
        setnamevar(0)
    }
    return (
        <>
          <div className="container">
           <div className="row">
            <div className="col">
               <center><h1>{varname}</h1></center> 
                {/* <button className='btn btn-primary' onClick={BtnClick}>Total</button> */}
                <br />
                <center>
                <button className='btn btn-primary me-3' onClick={IncClick}>Increament</button>
                <button className='btn btn-primary' onClick={DecClick}>Decreament</button>
                <br />
                <button className='btn btn-primary mt-3' onClick={ResetClick}>Reset</button>
                </center>
                
            </div>
            </div>  
          </div>  
        </>
    );
}

export default Usestate;
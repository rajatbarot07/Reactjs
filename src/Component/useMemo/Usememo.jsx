import React, { useMemo, useState } from 'react';

// I had only called the add variable in this function but when i click on the subtract button it also calls that function so that this can affect on the performance of the application it slow down the application. 
// So to avoid this we can use useMemo hook.

function Usememo(props) {
    const[add,setadd] = useState(0);
    const[minus,setminus] = useState(100);

    const multiplication = useMemo(function multiply(){
        console.log("****************"); 
        return add*10;
    },[add])
    return (
        <>
            <div className="text-center mt-5">
                    <h1>Learning useMemo Hook</h1>
                    {multiplication}<br/><br />
                    <button className='btn btn-primary' onClick={()=>setadd(add+1)}>Addition</button>
                    <span>{add}</span><br /><br />
                    <button className='btn btn-success' onClick={()=>setminus(minus-1)}>Substraction</button>
                    <span>{minus}</span>
            </div>
        </>
    );
}

export default Usememo;
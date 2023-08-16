import React, { useCallback, useState } from 'react';
import CallbackChild from './CallbackChild';

// useMemo and useCallback both are similar and both can enhance the performance of the application.
// The main difference is the useMemo hook returns the memoized value and the useCallback hook returns the memiozed function.  

function UseCallback() {
    const[add,setAdd] = useState(0)
    const[count,setCount] = useState(0)
    const Learning = useCallback(()=>{
        // some code
    },[count])
    return (
        <>
        <div className="text-center mt-5">
           <h1>Learning useCallback hook</h1>
           <CallbackChild learning={Learning} count={count}/>
           <h1>{add}</h1>
           <button className='btn btn-success' onClick={()=>setAdd(add+1)}>Addition</button> 
           <h1>{count}</h1>
           <button className='btn btn-danger' onClick={()=>setCount(count+2)}>Count</button>
        </div> 
        </>
    );
}

export default UseCallback;
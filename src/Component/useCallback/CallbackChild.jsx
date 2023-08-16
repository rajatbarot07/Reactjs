import {React,memo} from 'react';

function CallbackChild(learning,count) {
    console.log("Child Component");
    return (
        <>  
          
        </>
    );
}

export default memo(CallbackChild);
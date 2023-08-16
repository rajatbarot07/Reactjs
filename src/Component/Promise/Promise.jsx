import React from 'react';

function PromiseMethod(props) {
    let promise = new Promise((resolve,reject)=>{
        let gooddeveloper = true;
        if(gooddeveloper){
            resolve("You will get best company with high package");
        }
        else{
            reject("You have to improve your skills");
        }
        
    });
    promise.then((res)=>{
            console.log(res);
         }).catch((error)=>{
             console.log(error);
         })
    
        
    return (
        <div>
         

        </div>
    );
}

export default PromiseMethod;
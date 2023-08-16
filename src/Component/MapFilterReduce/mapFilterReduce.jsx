import React from 'react';

function mapFilterReduce(props) {
    const arr1 = [1,2,3,4,5,6,7,8,9];
    
    //Map method :- This method returns a new array from existing one and the specified function call only on the exixting one. 

    // const newArr = arr1.map((element)=>{
    //     return element*2  ;
    //   })

    //Filter method :- It returns a filtered array based on the specified condition.

    // const newArr = arr1.filter((ele)=>{
    //     return ele%2===0;
    // })

    //Reduce method :- This method has two parameters prev and curr and it returns the single value and it doesnot change original array.

    const newArr = arr1.reduce((prev,curr)=>{
        return prev+curr;
    })
    return (
        <>
          <h1>{'[' + newArr + ']'}</h1>
        </>
    );
}

export default mapFilterReduce;
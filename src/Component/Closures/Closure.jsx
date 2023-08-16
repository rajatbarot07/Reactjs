import React from 'react';

function Closure(props) {
    function func1(){
        let a=5;
        // console.log(a);
        function func2(){
            // let a = 6;
            console.log(a);
        }
        func2();
    }
    func1();
    return (
        <div>
            
        </div>
    );
}

export default Closure;
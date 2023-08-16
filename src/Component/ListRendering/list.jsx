import React from 'react';

function list(props) {
    const IPL = ["MI","CSK","RR"];
    const result = IPL.map((ele)=><h1>{ele}</h1>)
    return (
        <>
            <div className="container text-center mt-5">
                <h1>{result}</h1>
            </div>
        </>
    );
}

export default list;
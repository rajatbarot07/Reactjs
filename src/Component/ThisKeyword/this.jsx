import React from 'react';

function This(props) {
    return (
        <div>
            {/* by itself */}

            {/* {console.log(this)} */}

            {/* inside object method */}
             
            {/* {const obj = {
                name: "Rajat",
                lastName: "Barot",
                fullName: function(){
                    return this.name + " " + this.lastName;
                }
            }
            console.log(obj.fullName());
            } */}

            {/* inside function */}


            {/* {function xyz(){
                return this;
            }
              console.log(xyz())
            } */}
        </div>
    );
}

export default This;
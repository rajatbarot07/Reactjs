import React from 'react';

function callApplyBind(props) {
    const person1 = {
        FName: "Rajat",
        LName: "Barot",
        fullName: function(hometown,country){
            return this.FName + " " + this.LName +" " + hometown + " " + country;
        }
    }

    const person2 = {
        FName: "Raj",
        LName: "Kumar"
    }
    
    //Call Method
    console.log(person1.fullName.call(person2, "Aburoad", "India"));

    //Apply Method
    console.log(person1.fullName.apply(person2, ["Aburoad", "India"]));

    //Bind Method
    const result = person1.fullName.bind(person2, "Aburoad", "India");
    // console.log(result);
    console.log(result());

    return (
        <div>
            
        </div>
    );
}

export default callApplyBind;
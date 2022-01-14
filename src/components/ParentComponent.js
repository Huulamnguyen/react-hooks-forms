import React, {useState} from 'react';

import Form from "./Form";
import DisplayData from "./DisplayData";

function ParentComponent(){
    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Henry");

    function handleFirstNameChange(e){
        setFirstName(e.target.value)
        console.log("First Name",firstName)
    }

    function handleLastNameChange(e){
        setLastName(e.target.value)
        console.log("Last Name",lastName)
    }

    return (
        <div>  
            <Form 
                firstName={firstName}
                lastName={lastName}
                handleFirstNameChange={handleFirstNameChange}
                handleLastNameChange={handleLastNameChange}
            />

            <DisplayData firstName={firstName} lastName={lastName} />

        </div> 
        
    )
}

export default ParentComponent;
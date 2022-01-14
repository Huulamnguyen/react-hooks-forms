import React from "react";

function Form({firstName, lastName, handleFirstNameChange, handleLastNameChange  }) {

  return (
    <form>
      <input onChange={handleFirstNameChange} type="text" value={firstName} />
      <input onChange={handleLastNameChange} type="text" value={lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;

import { useState } from "react";
let name = '21F-9519';

function application(){
    // setname("Rai Umer Farooq");
    name="Rai Umer Farooq"
    }
export default function MyButton() {
    
    return (
      <button onClick={application()}>
        I'm a button
      </button>
    );
  }

 
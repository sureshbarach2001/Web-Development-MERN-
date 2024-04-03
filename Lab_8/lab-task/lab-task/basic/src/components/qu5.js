import React, { useState } from 'react';

const Application = () => {
  const [rollno, setRollno] = useState('');
  const [marks, setMarks] = useState('');
  const [name, setName] = useState('');

  const handleChange = () => {
    
    setRollno('12345');
    setMarks('95');
    setName('Zain');
  };


  return (

    <>

    <div className='Student'>
      <h1>Student Information</h1>
      <div className='data'> <p>Roll Number: {rollno}</p>
      <p>Marks: {marks}</p>
      <p>Name: {name}</p>
     </div>
      <div ><button onClick={handleChange}>update Information</button></div>
    </div>
    
    </>
  );
};

export default Application;
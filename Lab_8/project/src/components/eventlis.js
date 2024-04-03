import React, { useState } from 'react';


function MyForm() {


  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Submitted data:', formData);
  };

  return (
    <>
        <div class="form">
      <div class="title">Welcome</div>
      <div class="subtitle">Let's create your account!</div>
      <div class="input-container ic1">
        <input name='name' id="firstname" class="input" type="text" placeholder=" " value={formData.name} onChange={handleChange} required />
        <div class="cut"></div>
        <label for="firstname" class="placeholder">First name</label>
      </div>
      <div class="input-container ic2">
        <input name='username' value={formData.username} onChange={handleChange} id="lastname" class="input" type="text" placeholder=" " required />
        <div class="cut"></div>
        <label for="lastname" class="placeholder">Last name</label>
      </div>
      <div class="input-container ic2">
        <input name='pass' value={formData.password} onChange={handleChange} id="email" class="input" type="text" placeholder=" " required />
        <div class="cut cut-short"></div>
        <label for="email" class="placeholder">Email</label>
      </div>
      <button type="text" class="submit" onChange={handleSubmit}>submit</button>
    </div>
    <div className='rai'>
      firstname: {formData.name} <br />
      lastname: {formData.username} <br />
      Email: {formData.pass} <br />
  
    </div>
    </>
  )
}

export default MyForm;
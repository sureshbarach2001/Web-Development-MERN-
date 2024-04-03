document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
  
    loginForm.addEventListener('login-button', (e) => {
      e.preventDefault();
  
      const user = username.value;
      const pass = password.value;
  
      fetch('/login', {
        method: 'POST',
        body: JSON.stringify({ user, pass }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Login failed');
        }
        return response.json();
      })
      .then(data => {
        console.log('Login successful:', data);
      })
      .catch(error => {
        console.error(error);
      });
    });
  });
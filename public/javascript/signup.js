//Signup allows a user to sign up with a username, email, and password
//These can be used later to log back in and to contact users to purchase their products
async function signupFormHandler(event) {
  event.preventDefault();
  
  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  
  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'post',
        body: JSON.stringify({
          username,
          email,
          password
        }),
      headers: { 'Content-Type': 'application/json' }
    });
    
    if (response.ok) {
        console.log('success');
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
  }
}
  
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
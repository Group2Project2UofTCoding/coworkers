// Sign In
// const signInForm = document.getElementById("signInForm");

// signInForm.addEventListener("submit", function() {window.open("./dashboard.html");});

async function signupFormHandler(event) {
  event.preventDefault();

  const manager_name = document.querySelector('#manager-name').value.trim();
  const dept = document.querySelector('#manager-dept').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  // console.log("signupFormhandler")

  if(manager_name && email && password) {
      const response = await fetch('/api/manager', {
          method: 'post',
          body: JSON.stringify({
              manager_name,
              // dept,
              email,
              password
          }),
          headers:{'Content-Type':'application/json'}
      });

      // check the response status
      if (response.ok) {
          document.location.replace('/dashboard');
      } else {
          alert(response.statusText);
      }
  }
}

document.querySelector('.signup-form').addEventListener('submit',signupFormHandler); 
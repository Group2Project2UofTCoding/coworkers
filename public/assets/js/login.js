// Sign In
// const signInForm = document.getElementById("signInForm");

// signInForm.addEventListener("submit", function() {window.open("./dashboard.html");});

async function loginFormHandler(event) {
    event.preventDefault();
    console.log("login js");
    const email = document.querySelector('#exampleInputEmail1').value.trim();
    const password = document.querySelector('#exampleInputPassword1').value.trim();

    if(email && password) {
        const response = await fetch('/api/manager/login',{
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: {'Content-Type':'application/json'}
        });

        if(response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.login-form').addEventListener('submit',loginFormHandler);
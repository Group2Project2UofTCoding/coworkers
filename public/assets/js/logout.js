async function logout() {
    console.log("logout function");
    const response = await fetch('/api/manager/logout', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
  console.log("logout function");
  document.querySelector('#logout').addEventListener('click', logout);
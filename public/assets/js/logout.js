async function logout() {
  console.log("logout function");
  const response = await fetch('/api/manager/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    document.location.replace('/login');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('#logout').addEventListener('click', logout); 
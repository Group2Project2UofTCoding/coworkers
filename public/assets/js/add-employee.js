const addEditEmployeeForm = document.getElementById("addEditEmployeeModal");

// Handle modal form data on submit
async function handleEmployeeModalSubmit(event) {
  // Prevent default event behaviours
  event.preventDefault();

  // Store information from the modal upon submit
  const first_name = document.getElementById("employeeFirstName").value;
  const last_name = document.getElementById("employeeLastName").value;
  const email = document.getElementById("employeeEmail").value;
  const phone_number = document.getElementById("employeePhoneNumber").value;
  const addressLine1 = document.getElementById("employeeAddress1").value;
  const addressLine2 = document.getElementById("employeeAddress2").value;
  const city = document.getElementById("employeeCity").value;
  const postalCode = document.getElementById("employeeZIP").value;
  const role_id = document.getElementById("employeeRole").value;
  console.log(role_id);
  const date_of_hire = document.getElementById("hireDate").value;
  const photo = document.getElementById("photoUrl").value;
  const sin = document.getElementById("employeeSIN").value;
  const certification = employeeCertification.value;


  // Get the address values and combines into one string
  const address = [addressLine1, addressLine2, city, postalCode].join(", ");

  // Create an employee's information object
  const employeeObject = { first_name, last_name, email, phone_number, address, sin, role_id, date_of_hire, photo };
  
    // POST updated employeesObject to the database
  await fetch('api/employee', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(employeeObject)
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      alert('Error: ' + response.statusText);
    })
    .then(postResponse => {
      console.log(postResponse);
      alert('Thank you for adding/updating employee(s)');
    });
}

addEditEmployeeForm.addEventListener("submit", handleEmployeeModalSubmit);
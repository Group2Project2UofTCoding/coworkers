// __________
// DOM Element Variables
// __________

// Employees' tiles section
const employeeTiles = document.getElementById("employeeTiles");

// Buttons
const addEmployeeButton = document.getElementById("addEmployeeButton");
const editEmployeeButton = document.getElementsByClassName("editEmployeeButton");
const removeEmployeeButton = document.getElementsByClassName("removeEmployeeButton");

// Forms
const addEditEmployeeForm = document.getElementById("addEditEmployeeModal");
const removeEmployeeForm = document.getElementById("removeEmployeeModal");

// Add/Edit employee's modal inputs
const employeeFirstName = document.getElementById("employeeFirstName");
const employeeLastName = document.getElementById("employeeLastName");
const employeeUsername = document.getElementById("employeeUsername");
const employeeEmail = document.getElementById("employeeEmail");
const employeePassword = document.getElementById("employeePassword");
const employeePhoneNumber = document.getElementById("employeePhoneNumber");
const employeeAddress1 = document.getElementById("employeeAddress1");
const employeeAddress2 = document.getElementById("employeeAddress2");
const employeeCity = document.getElementById("employeeCity");
const employeeRole = document.getElementById("employeeRole");
const employeeLevel = document.getElementById("employeeLevel");
const employeeDepartment = document.getElementById("employeeDepartment");
const employeeSalary = document.getElementById("employeeSalary");
const employeeSIN = document.getElementById("employeeSIN");
const employeeEmergencyContactName = document.getElementById("employeeEmergencyContactName");
const employeeEmergencyContactPhoneNumber = document.getElementById("employeeEmergencyContactPhone");
const employeeCertification = document.getElementById("employeeCertification");
const employeeSubmit = document.getElementById("addEditEmployeeSubmit");

// Delete employee's modal inputs
const selectedEmployee = document.getElementById("selectedEmployee");
const deleteEmployeeSubmit = document.getElementById("removeEmployeeSubmit");

// __________
// Non-DOM Element Variables
// __________

var employeesObject = {};
var employeesArray = [];

// __________
// Functions
// __________

// Retrieve all employees' information
function fetchEmployeesInformation() {
  fetch("api/employees")
    .then(response => {
      if (!response.ok) {
        return alert(`Error: ${response.statusText}`);
      }
      return response.json();
    })
    .then(employees => {
      console.log(employees);
      generateEmployeeTiles(employees);
    });
}

// Populate the dashboard with current employees' information
function generateEmployeeTiles(employeesObject) {
  // Note that the employeesObject contains an employee's ID as the key and the information object as the value

  console.log(employeesObject);

  // Creating HTML code for each employee in the employeesObject
  for (const [key, value] of Object.entries(employeesObject)) {
    console.log(`${key}: ${value}`);

    // Add HTML for an employee's tile to the employeesArray
    employeesArray.push(
      `<div class="card">
        <img class="card-img-top" src="..." alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${value.firstName} ${value.lastName}</h5>
          <p class="card-text">${value.level} ${value.role}, ${value.department} Department</p>
        </div>
        <button type="button" class="btn btn-primary editEmployeeButton" data-toggle="modal" data-target="#employeeModal" value="${key}">
          View/Edit Employee
        </button>
        <button type="button" class="btn btn-primary removeEmployeeButton" data-toggle="modal" data-target="#removeEmployeeModal" value="${key}">
          Remove Employee
        </button>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>`);

    // Adding the HTML for the each employee's tile to the employee tile section in the dashboard
    employeeTiles.innerHTML = employeesArray.join('');
  }
}

// Handle viewing an employee's information
function handleEmployeeModalView(event) {
  // Prevent default event behaviours
  event.preventDefault();

  // Retrieve and store the employee's ID which is stored in the value property of the button in the card
  const employeeID = event.target.value;

  // Find the employee's information object in the employeesObject
  const employeeObject = employeesObject.employeeID;

  // Display information in the modal upon submit
  employeeFirstName.value = employeeObject.firstName;
  employeeLastName.value = employeeObject.lastName;
  employeeUsername.value = employeeObject.username;
  employeeEmail.value = employeeObject.email;
  employeePassword.value = employeeObject.password;
  employeePhoneNumber.value = employeeObject.phoneNumber;
  employeeAddress1.value = employeeObject.addressLine1;
  employeeAddress2.value = employeeObject.addressLine2;
  employeeCity.value = employeeObject.city;
  employeeRole.value = employeeObject.role;
  employeeLevel.value = employeeObject.level;
  employeeDepartment.value = employeeObject.department;
  employeeSalary.value = employeeObject.salary;
  employeeSIN.value = employeeObject.sin;
  employeeEmergencyContactName.value = employeeObject.contactName;
  employeeEmergencyContactPhoneNumber.value = employeeObject.contactNumber;
  employeeCertification.value = employeeObject.certification;
}

// Handle modal form data on submit
function handleEmployeeModalSubmit(event) {
  // Prevent default event behaviours
  event.preventDefault();

  // Store information from the modal upon submit
  const firstName = employeeFirstName.value;
  const lastName = employeeLastName.value;
  const username = employeeUsername.value;
  const email = employeeEmail.value;
  const password = employeePassword.value;
  const phoneNumber = employeePhoneNumber.value;
  const addressLine1 = employeeAddress1.value;
  const addressLine2 = employeeAddress2.value;
  const city = employeeCity.value;
  const role = employeeRole.value;
  const level = employeeLevel.value;
  const department = employeeDepartment.value;
  const salary = employeeSalary.value;
  const sin = employeeSIN.value;
  const contactName = employeeEmergencyContactName.value;
  const contactNumber = employeeEmergencyContactPhoneNumber.value;
  const certification = employeeCertification.value;

  // Create an employee's information object
  const employeeObject = { firstName, lastName, username, email, password, phoneNumber, addressLine1, addressLine2, city, role, level, department, salary, sin, contactName, contactNumber, certification };
  
  // Create or find a unique ID for an employee in the employeesObject
  const employeeID = Object.keys(employeesObject).length;
  employeesObject.employeeID = employeeObject;

  console.log(employeeObject, employeesObject);
  
  // POST updated employeesObject to the database
  fetch('api/employees', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(employeesObject)
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

// Handle removing an employee's information
function handleEmployeeRemoveSubmit(event) {
  // Prevent default event behaviours
  event.preventDefault();

  // Retrieve and store the employee's ID which is stored in the value property of the button in the card
  const employeeID = event.target.value;

  // Find the employee's information object in the employeesObject and delete it
  delete employeesObject.employeeID;

  // POST updated employeesObject to the database
  fetch('api/employees', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(employeesObject)
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      alert('Error: ' + response.statusText);
    })
    .then(postResponse => {
      console.log(postResponse);
      alert('Thank you for removing employee(s)');
    });
}

// __________
// Event Handlers
// __________

// Event listener for adding a new employee in the Employee Information modal form
addEditEmployeeForm.addEventListener("submit", handleEmployeeModalSubmit);

// Event listener for viewing an employee's information in a modal
editEmployeeButton.addEventListener("click", handleEmployeeModalView);

// Event listener for removing an employee button in an employee's tile
removeEmployeeButton.addEventListener("click", handleEmployeeRemoveSubmit);

// __________
// Script
// __________

fetchEmployeesInformation();
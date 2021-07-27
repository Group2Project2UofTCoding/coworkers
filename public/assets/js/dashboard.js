// __________
// DOM Element Variables
// __________

// Employees' tiles section
const employeeTiles = document.getElementById("employeeTiles");

// Buttons
const addEmployeeButton = document.getElementById("addEmployeeButton");
const editEmployeeButton = document.getElementById("editEmployeeButton");
const deleteEmployeeButton = document.getElementById("removeEmployeeButton");

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

// __________
// Functions
// __________

// Retrieve all employees' information
function employeesInformation() {
  
}

// Populate the dashboard with current employees' information
function generateEmployeeTiles(employeesObject) {
  console.log(employeesObject);

  const employeeHTML = employeesObject.map(());

  employeeTiles.innerHTML = employeeHTML.join('');
}

// Handle viewing an employee's information
function handleEmployeeModalView(event) {
  // Prevent default event behaviours
  event.preventDefault();

  var employeeID = event.target.value;

}

// Handle modal form data
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

  var employeeObject = { firstName, lastName, username, email, password, phoneNumber, addressLine1, addressLine2, city, role, level, department, salary, sin, contactName, contactNumber, certification };

  console.log(employeeObject);
  
  fetch('api/employee', {
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
        alert('Thank you for adding an employee');
      });
}

// Handle removing an employee's information
function handleEmployeeRemoveSubmit(event) {

}

// __________
// Event Handlers
// __________

// Event listener for submiting an a new employee
addEditEmployeeForm.addEventListener("submit", handleEmployeeModalSubmit);

// Event listener for viewing an employee's information in a modal
editEmployeeButton.addEventListener("click", handleEmployeeModalView);

// Event listener for removing an employee
removeEmployeeForm.addEventListener("submit", handleEmployeeRemoveSubmit);

// __________
// Script
// __________
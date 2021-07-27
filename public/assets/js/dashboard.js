// __________
// DOM Element Variables
// __________

// Employees' Tiles Section
const employeeTiles = document.getElementById("");

// Buttons
const addEmployeeButton = document.getElementById("addEmployeeButton");
const editEmployeeButton = document.getElementById("editEmployeeButton");
const deleteEmployeeButton = document.getElementById("removeEmployeeButton");

// Add/Edit Employee's Modal Inputs
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

// Delete Employee's Modal Inputs
const selectedEmployee = document.getElementById("selectedEmployee");
const deleteEmployeeSubmit = document.getElementById("removeEmployeeSubmit");

// __________
// Non-DOM Element Variables
// __________

// __________
// Functions
// __________

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

// Handle Viewing an Employee's Information
function handleViewEmployeeModal(event) {
    // Prevent default event behaviours
    event.preventDefault();

    var employeeID = event.target.value;




}

// Handle Modal Form Data
function handleEmployeeModalSubmit(event) {
    // Prevent default event behaviours
    event.preventDefault();

    // Store information from the modal upon submit
    var name = employeeName.value;
    var role = employeeRole.value;
    var level = employeeLevel.value;
    var department = employeeDepartment.value;
    var salary = employeeSalary.value;
    var address = employeeAddress.value;
    var email = employeeEmail.value;
    var phone = employeePhone.value;
    var sin = employeeSIN.value;
    var emergencyContact = employeeEmergencyContact.value;
    var emergencyContactNumber = employeeEmergencyContactNumber.value;

    var employeeObject = { name, role, level, department, salary, address, email, phone, sin, phone, emergencyContact, emergencyContactNumber };

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
    };
}

// __________
// Event Handlers
// __________


// __________
// Script
// __________
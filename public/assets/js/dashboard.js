// __________
// DOM Element Variables
// __________

// Tile Section
const employeeTiles = document.getElementById("");

// Buttons
const addEmployeeButton = document.getElementById("");
const editEmployeeButton = document.getElementById("");
const deleteEmployeeButton = document.getElementById("");

// Employee Modal
const employeeForm = document.getElementById("");

// Add/Edit Employee's Modal Inputs
const employeeName = document.getElementById("");
const employeeRole = document.getElementById("");
const employeeLevel = document.getElementById("");
const employeeDepartment = document.getElementById("");
const employeeSalary = document.getElementById("");
const employeeAddress = document.getElementById("");
const employeeEmail = document.getElementById("");
const employeePhone = document.getElementById("");
const employeeSIN = document.getElementById("");
const employeeEmergencyContact = document.getElementById("");
const employeeEmergencyContactNumber = document.getElementById("");
const employeeSubmit = document.getElementById("");

// Delete Employee's Modal Inputs
const selectEmployee = document.getElementById("");
const deleteSubmit = document.getElementById("");

// __________
// Non-DOM Element Variables
// __________

// __________
// Functions
// __________

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
// Note for Back-End Developers: The only object that is being sent to or recieved from API endpoints is the employeesObject
// Manipulation of this object is handled soley within this file
// API endpoints are all that need to be changed

// __________
// DOM Element Variables
// __________

// Employees' container section
const employeeContainerRow = document.getElementById("employeeContainerRow");

// Buttons
const addEmployeeButton = document.getElementById("addEmployeeButton");

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
const employeeProvince = document.getElementById("employeeProvince");
const employeeZIP = document.getElementById("employeeZIP");
const employeeSIN = document.getElementById("employeeSIN");
const employeeRole = document.getElementById("employeeRole");
const employeeLevel = document.getElementById("employeeLevel");
const employeeDepartment = document.getElementById("employeeDepartment");
const employeeSalary = document.getElementById("employeeSalary");
const employeeEmergencyContactName = document.getElementById("employeeEmergencyContactName");
const employeeEmergencyContactPhoneNumber = document.getElementById("employeeEmergencyContactPhoneNumber");
const employeeCertification = document.getElementById("employeeCertification");
const employeeSubmit = document.getElementById("addEditEmployeeSubmit");

// Logout dropdown option
const logout = document.getElementById("logout");

// Search bar
const search = document.getElementById("search");
const searchButton = document.getElementById("searchButton");

// __________
// Non-DOM Element Variables
// __________

// Initializing example employee objects
const employeeObject1 = { "firstName": "John", "lastName": "Doe", "username": "JohnDoe", "email": "john.doe@gmail.com", "password": "password", "phoneNumber": "45634534534", "addressLine1": "1234 Main Street", "addressLine2": "Apartment Suite # 10", "city": "Toronto", "province": "Ontario", "zip": "K5F-2F5", "sin": "123456789", "role": "Product Manager", "level": "Junior", "department": "Production", "salary": "$250,000.00", "contactName": "Sally Smith", "contactNumber": "45634534534", "certification": "certification" };
const employeeObject2 = { "firstName": "Sally", "lastName": "Smith", "username": "SallySmith", "email": "sally.smith@gmail.com", "password": "password", "phoneNumber": "45634534534", "addressLine1": "1234 Main Street", "addressLine2": "Apartment Suite # 10", "city": "Toronto", "province": "Ontario", "zip": "K5F-2F5", "sin": "12345678", "role": "Product Designer", "level": "Junior", "department": "Production", "salary": "$250,000.00", "contactName": "John Doe", "contactNumber": "45634534534", "certification": "certification" };
const employeeObject3 = { "firstName": "Tom", "lastName": "Riddle", "username": "TomRiddle", "email": "tom.riddle@gmail.com", "password": "password", "phoneNumber": "45634534534", "addressLine1": "1234 Main Street", "addressLine2": "Apartment Suite # 10", "city": "Toronto", "province": "Ontario", "zip": "K5F-2F5", "sin": "1234567", "role": "Product Designer", "level": "Junior", "department": "Production", "salary": "$250,000.00", "contactName": "Sally Smith", "contactNumber": "45634534534", "certification": "certification" };
const employeeObject4 = { "firstName": "James", "lastName": "Wong", "username": "JamesWong", "email": "james.wong@gmail.com", "password": "password", "phoneNumber": "45634534534", "addressLine1": "1234 Main Street", "addressLine2": "Apartment Suite # 10", "city": "Toronto", "province": "Ontario", "zip": "K5F-2F5", "sin": "123456", "role": "Software Engineer", "level": "Junior", "department": "Production", "salary": "$250,000.00", "contactName": "John Doe", "contactNumber": "45634534534", "certification": "certification" };
const employeeObject5 = { "firstName": "Edward", "lastName": "Smith", "username": "EdwardSmith", "email": "edward.smith@gmail.com", "password": "password", "phoneNumber": "45634534534", "addressLine1": "1234 Main Street", "addressLine2": "Apartment Suite # 10", "city": "Toronto", "province": "Ontario", "zip": "K5F-2F5", "sin": "12345", "role": "Software Engineer", "level": "Junior", "department": "Production", "salary": "$250,000.00", "contactName": "Sally Smith", "contactNumber": "45634534534", "certification": "certification" };
const employeeObject6 = { "firstName": "Angela", "lastName": "Riddle", "username": "AngelaRiddle", "email": "angela.riddle@gmail.com", "password": "password", "phoneNumber": "45634534534", "addressLine1": "1234 Main Street", "addressLine2": "Apartment Suite # 10", "city": "Toronto", "province": "Ontario", "zip": "K5F-2F5", "sin": "1234", "role": "Data Scientist", "level": "Junior", "department": "Production", "salary": "$250,000.00", "contactName": "John Doe", "contactNumber": "45634534534", "certification": "certification" };
const employeeObject7 = { "firstName": "Tom", "lastName": "Bradley", "username": "TomBradley", "email": "tom.bradley@gmail.com", "password": "password", "phoneNumber": "45634534534", "addressLine1": "1234 Main Street", "addressLine2": "Apartment Suite # 10", "city": "Toronto", "province": "Ontario", "zip": "K5F-2F5", "sin": "123", "role": "Data Scientist", "level": "Junior", "department": "Production", "salary": "$250,000.00", "contactName": "Sally Smith", "contactNumber": "45634534534", "certification": "certification" };
const employeeObject8 = { "firstName": "Justin", "lastName": "Bieber", "username": "JustinBieber", "email": "justin.bieber@gmail.com", "password": "password", "phoneNumber": "45634534534", "addressLine1": "1234 Main Street", "addressLine2": "Apartment Suite # 10", "city": "Toronto", "province": "Ontario", "zip": "K5F-2F5", "sin": "12", "role": "Data Scientist", "level": "Junior", "department": "Production", "salary": "$250,000.00", "contactName": "John Doe", "contactNumber": "45634534534", "certification": "certification" };

// Initializing employees object and array
var employeesObject = {"0": employeeObject1, "1": employeeObject2, "2": employeeObject3, "3": employeeObject4, "4": employeeObject5, "5": employeeObject6, "6": employeeObject7, "7": employeeObject8, };
var employeesArray = [];

// __________
// Functions
// __________

// Retrieve all employees' information
function fetchEmployeesInformation() {
  // Making a GET request for employeesObject from the database
  fetch("api/employees")
    .then(response => {
      if (!response.ok) {
        return alert(`Error: ${response.statusText}`);
      }
      return response.json();
    })
    .then(employees => {
      employeesObject = employees;

      // Update the dashboard
      generateEmployeeTiles(employees);
    });
}

// Populate the dashboard with current employees' information
function generateEmployeeTiles(employees) {
  // Note that the employees object contains an employee's ID as the key and the information object as the value

  // Reset employeesArray
  employeesArray = [];

  // Creating HTML code for each employee in the employeesObject
  for (const [key, value] of Object.entries(employees)) {
    // Add HTML for an employee's tile to the employeesArray
    employeesArray.push(
      `
      <div class="col-lg-3 col-md-12">
        <div class="card">
          <img class="card-img-top" src="https://via.placeholder.com/150" alt="${value.firstName} ${value.lastName}'s Photo">

          <div class="card-body">
            <h5 class="card-title">${value.firstName} ${value.lastName}</h5>
            <p class="card-text">${value.level} ${value.role}, ${value.department} Department</p>
          </div>
          
          <button type="click" class="btn btn-primary editEmployeeButton" data-toggle="modal" data-target="#addEditEmployeeModal" value="${key}">View/Edit Employee</button>

          <button type="click" class="btn btn-primary removeEmployeeButton" value="${key}">Remove Employee</button>

          <div class="card-footer">
            <small class="text-muted">Last updated on page load</small>
          </div>
        </div>
      </div>
      `);

    // Adding the HTML for the each employee's tile to the employee tile section in the dashboard
    employeeContainerRow.innerHTML = employeesArray.join('');
  }
}

// Handle viewing an employee's information
function handleEmployeeModalView(targetEvent) {
  // Retrieve and store the employee's ID which is stored in the value property of the button in the card
  const employeeID = targetEvent.value;

  // Find the employee's information object in the employeesObject
  const employeeObject = employeesObject[employeeID];

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
  employeeProvince.value = employeeObject.province;
  employeeZIP.value = employeeObject.zip;
  employeeSIN.value = employeeObject.sin;
  employeeRole.value = employeeObject.role;
  employeeLevel.value = employeeObject.level;
  employeeDepartment.value = employeeObject.department;
  employeeSalary.value = employeeObject.salary;
  employeeEmergencyContactName.value = employeeObject.contactName;
  employeeEmergencyContactPhoneNumber.value = employeeObject.contactNumber;
  employeeCertification.value = employeeObject.certification;
}

// Handle modal form data on submit
function handleEmployeeModalSubmit(targetEvent) {
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
  const province = employeeProvince.value;
  const zip = employeeZIP.value;
  const sin = employeeSIN.value;
  const role = employeeRole.value;
  const level = employeeLevel.value;
  const department = employeeDepartment.value;
  const salary = employeeSalary.value;
  const contactName = employeeEmergencyContactName.value;
  const contactNumber = employeeEmergencyContactPhoneNumber.value;
  const certification = employeeCertification.value;

  // Create an employee's information object
  const employeeObject = { "firstName": firstName, "lastName": lastName, "username": username, "email": email, "password": password, "phoneNumber": phoneNumber, "addressLine1": addressLine1, "addressLine2": addressLine2, "city": city, "province": province, "zip": zip, "sin": sin, "role": role, "level": level, "department": department, "salary": salary, "contactName": contactName, "contactNumber": contactNumber, "certification": certification };
  
  // Check to see if the employee already exists inside the employeesObject; if so, then update that employee's information
  for (const [key, value] of Object.entries(employeesObject)) {
    if (value.sin == sin){
      employeesObject[key] = employeeObject;

      // Update the dashboard
      generateEmployeeTiles(employeesObject);
      return;
    }
  }

  // Otherwise, create a unique ID for an employee in the employeesObject
  const employeeID = String(Object.keys(employeesObject).length);

  // Add the new employee to the employeesObject
  employeesObject[employeeID] = employeeObject;

  // Update the dashboard
  generateEmployeeTiles(employeesObject);

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
function handleEmployeeRemoveSubmit(targetEvent) {
  // Retrieve and store the employee's ID which is stored in the value property of the button in the card
  const employeeID = targetEvent.value;

  if (window.confirm("Are you sure that you want to remove this employee?")) {
    // Find the employee's information object in the employeesObject and delete it
    delete employeesObject[employeeID];
    generateEmployeeTiles(employeesObject);

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
}

//Search for and display employee(s)
function searchForEmployee(searchedEmployee) {
  // Intializing search-related constant
  const searchedEmployeesObject = {};
  
  // Lowercase searched employee
  const lowercaseSearch = searchedEmployee.toLowerCase();
  
  // Loop through employeesObject to find employee(s)
  for (const [key, value] of Object.entries(employeesObject)) {
    if (lowercaseSearch == (value.firstName).toLowerCase()){
      searchedEmployeesObject[key] = employeesObject[key]
    }        
  }

  // If employee(s) is/are found, print them to the page
  if (searchedEmployeesObject) {
    generateEmployeeTiles(searchedEmployeesObject);
  }
  // Else, employee was not found
  else {      
  window.alert(`We cannot find ${search.value}!`)
  }
}

// __________
// Event Handlers
// __________

addEmployeeButton.addEventListener("click", function(){
  employeeFirstName.value = "";
  employeeLastName.value = "";
  employeeUsername.value = "";
  employeeEmail.value = "";
  employeePassword.value = "";
  employeePhoneNumber.value = "";
  employeeAddress1.value = "";
  employeeAddress2.value = "";
  employeeCity.value = "";
  employeeProvince.value = "";
  employeeZIP.value = "";
  employeeSIN.value = "";
  employeeRole.value = "";
  employeeLevel.value = "";
  employeeDepartment.value = "";
  employeeSalary.value = "";
  employeeEmergencyContactName.value = "";
  employeeEmergencyContactPhoneNumber.value = "";
  employeeCertification.value = "";
});

// Event listener for adding a new employee in the Employee Information modal form
addEditEmployeeForm.addEventListener("submit", function(event) {
  // Prevent default event behaviours
  event.preventDefault();

  const targetEvent = event;
  
  // Submit the modal's information
  handleEmployeeModalSubmit(targetEvent);
});

// Event listener for viewing or removing an employee's information in a modal
employeeContainer.addEventListener("click", function(event) {
  // Prevent default event behaviours
  event.preventDefault();

  const targetEvent = event.target;
  
  // Event listener for determining if the user wants to edit/view or remove and employee's information
  if (targetEvent.className == "btn btn-primary editEmployeeButton") {
    handleEmployeeModalView(targetEvent);
  }
  if (targetEvent.className == "btn btn-primary removeEmployeeButton") {
    handleEmployeeRemoveSubmit(targetEvent);
  }
});

// Event listener for search
searchButton.addEventListener("click", function(){
  // Intializing search-related constant
  const searchedEmployee = search.value;

  // If the search field is blank, reset the Direct Reports displayed
  if (searchedEmployee == "") {
    generateEmployeeTiles(employeesObject);
    return;
  }

  // Otherwise, search for an employee
  searchedEmployeesObject = searchForEmployee(searchedEmployee);
});

// Does not do anything at the moment
logout.addEventListener("click", function(){});

// __________
// Script
// __________

// GET employeesObject from the database upon page load
fetchEmployeesInformation();
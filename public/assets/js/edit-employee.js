const empContainer = document.querySelector('#employeeContainer');
const searchEmpContainer = document.querySelector('#searchEmployeeContainer');
const editForm = document.getElementById('emloyeeEditForm');

// define the id from values
let empId;

let first_name = document.getElementById("editEmployeeFirstName");
let last_name = document.getElementById("editEmployeeLastName");
let email = document.getElementById("editEmployeeEmail");
let phone_number = document.getElementById("editEmployeePhoneNumber");
let addressLine1 = document.getElementById("editEmployeeAddress1");
let addressLine2 =  document.getElementById("editEmployeeAddress2");
let employeeCity = document.getElementById("editEmployeeCity");
let employeeProvince = document.getElementById("editEmployeeProvince");
let postalCode =  document.getElementById("editEmployeeZIP");
let role_id = document.getElementById("editEmployeeRole");
let date_of_hire = document.getElementById("editHireDate");
let sin = document.getElementById("editEmployeeSIN");
let photo = document.getElementById("editPhoto");

// function to view the edit from with the information
async function handleEditEmployeeModal(event) {
  if(event.target.classList.contains('editEmployeeButton')) {
    empId = event.target.value;

    await fetch(`/api/employee/${empId}`, {})
    .then(result => result.json())
    .then(data => {
      console.log(data);
      first_name.value = data.first_name;
      last_name.value = data.last_name;
      email.value = data.email;
      phone_number.value = data.phone_number;
      addressLine1.value = data.address.split(',')[0] ? data.address.split(',')[0]: "";
      addressLine2.value = data.address.split(',')[1] ? data.address.split(',')[1]: "";
      employeeCity.value = data.address.split(',')[2] ? data.address.split(',')[2]: "";
      employeeProvince.value = data.address.split(',')[3] ? data.address.split(',')[3].trim() : "";
      postalCode.value = data.address.split(',')[4] ? data.address.split(',')[4]: "";
      role_id.value = data.role_id;
      date_of_hire.value = data.date_of_hire;
      sin.value = data.sin;
      photo.value = data.photo;

    })
    .catch(err => {
      console.log(err);
    })
  }
};

// funtion to submit the edited form
async function editEmployeeSubmitHandler (event) {
  event.preventDefault();

  const address = [addressLine1.value,
    addressLine2.value,
    employeeCity.value,
    employeeProvince.value,
    employeeZIP.value].join(',');

  const employeeObj = {
    first_name: first_name.value,
    last_name: last_name.value,
    email: email.value,
    phone_number: phone_number.value,
    address,
    sin: sin.value,
    role_id: role_id.value,
    date_of_hire: date_of_hire.value,
    photo: photo.value
  }

  
  console.log(employeeObj);
  await fetch(`api/employee/${empId}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(employeeObj)
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      alert('Error: ' + response.statusText);
    })
    .then(postResponse => {
      alert('The employee has been successfully updated!');
      document.location.reload();
    })
    .catch(err => {
      console.log(err);
    });

}

// event handlers
empContainer.addEventListener('click', handleEditEmployeeModal);
searchEmpContainer.addEventListener('click', handleEditEmployeeModal);
editForm.addEventListener('submit', editEmployeeSubmitHandler);
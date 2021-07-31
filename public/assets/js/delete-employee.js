async function handleEditEmployeeModal(event) {
  if(event.target.classList.contains('removeEmployeeButton')) {
    empId = event.target.value;
    console.log(empId);

    const response = await fetch(`/api/employee/${empId}`, {
      method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
    }); 
  
    if(response.ok) {
      alert('The employee has been successfully deleted');
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

empContainer.addEventListener('click', handleEditEmployeeModal);
searchEmpContainer.addEventListener('click', handleEditEmployeeModal);
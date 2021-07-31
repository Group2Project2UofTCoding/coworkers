const searchForm = document.querySelector('#searchForm');
const alertDanger = document.querySelector('#alertDanger');

// Fetch and display the search results
async function searchSubmitHandler(event) {
  event.preventDefault();

  // get the search query
  let searchInput = document.querySelector('#searchInput').value;
  let template;

  // document.location.replace('/dashboard/search')
  const res = await fetch(`/api/employee/?search=${searchInput}`);

  if(res.ok) {
    res.json().then(data => {
      // hide and show the container
      empContainer.classList.add('d-none');
      searchEmpContainer.classList.remove('d-none');

      // Check the returned results
      if(data.length !== 0) {
         template = Handlebars.compile(`
            {{#each searchEmployees as |employee|}}
            <div class="col-lg-4 col-md-12 mb-4">
              <div class="card" emp-id="{{id}}">
                  <!-- Employee's Photo -->
                  <img class="card-img-top" src="{{photo}}" alt="{{first_name}}'s photo">
                  
                  <!-- Employee's Information -->
                  <div class="card-body">
                        <h4 class="card-title">{{first_name}} {{last_name}}</h4>
                        <p class="card-text mb-0"><i class="fas fa-user-tag"></i> &nbsp{{role.role_name}}</p>
                        <p class="card-text mb-0"><i class="fas fa-envelope"></i> &nbsp {{email}}</p>
                        <p class="card-text mb-0"><i class="fas fa-phone"></i> &nbsp {{phone_number}}</p>
                        <p class="card-text mb-0"><i class="fas fa-map-marker-alt"></i> &nbsp {{address}}</p>
                  </div>
                  
                  <!-- View/Edit Employee Button -->
                  <button type="click" class="btn btn-primary editEmployeeButton mx-4 mb-2" data-toggle="modal" data-target="#editEmployeeModal" value="{{id}}">View/Edit Employee</button>

                  <!-- Remove Employee Button -->
                  <button type="click" class="btn btn-danger removeEmployeeButton mx-4 mb-3" value="{{id}}">Remove Employee</button>

                  <!-- Employee Card Footer -->
                  <div class="card-footer">
                      <small class="text-muted">Last updated on page load</small>
                  </div>
              </div>
            </div>
            {{/each}}
        `);
      } else {
        template = Handlebars.compile(`
        <div class="col">
        <div class="alert alert-danger" role="alert">
          Sorry! No results found...
        </div>
        </div>`);
      }

    const searchContainer = document.querySelector('#searchEmployeeContainerRow');
    
    searchContainer.innerHTML = template({searchEmployees: data});
    });
  } else {
    alertDanger.classList.remove('d-none');
  }

}


searchForm.addEventListener('submit', searchSubmitHandler);
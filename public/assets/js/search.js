const searchForm = document.querySelector('#searchForm');

console.log(searchForm);

async function searchSubmitHandler(event) {
  event.preventDefault();
  let searchInput = document.querySelector('#searchInput').value;
  console.log(searchInput);
  
  const res = await fetch(`/dashboard/search/${searchInput}`);

  if(res.ok) {
    // document.location.replace(`/dashboard/`);
    console.log('success');
} else {
  console.log("did not go well");
}

}


searchForm.addEventListener('submit', searchSubmitHandler);
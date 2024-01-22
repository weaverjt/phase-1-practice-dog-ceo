console.log('%c HI', 'color: firebrick')

//challenge 1
function fetchDog () {
    
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl)
    .then((resp) => resp.json())
    .then((json) => postDog(json));

}
function postDog(dogs) {
  const dogImageContainer = document.getElementById('dogImageContainer'); //for some reason it needed this stated again...

  const dogImages = dogs.message;

  dogImages.forEach((dog) => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = dog;
    li.appendChild(img);
    dogImageContainer.appendChild(li);
  });
}

//challenge 2

function fetchBreed () {
    
  const breedUrl = "https://dog.ceo/api/breeds/list/all";
  fetch(breedUrl)
  .then((resp) => resp.json())
  .then((json) => breedEm(json));
}

function breedEm(dogs) {
  const dogBreeds = document.getElementById("dogBreeds");

  const dogB = dogs.message;

  Object.keys(dogB).forEach((breed) => {
    const button = document.createElement("button");
    button.innerHTML = breed;
    button.className = "toggle";
    button.addEventListener("click", toggle);
    dogBreeds.appendChild(button);
  });
}
let active = false;

function toggle(event) {
  const button = event.target;
  
  active = !active
  if (active) {
      button.classList.add('active');
  } else {
      button.classList.remove('active')
      
  }
}

//challenge 4
//once all the dog breeds are able to load, add js so that the user can filter breeds that start with a particular letter using a dropdown
//example---if the user selects 'a' in the dropdown, only show the breeds with the names that start with 'a' (dropdown only includes letters a-d)

function handleDropdownChange(event) {
  const selectedValue = event.target.value;
  // Get all the dog breed buttons
  const breedButtons = document.querySelectorAll("#dogBreeds button");

  // Iterate over the breed buttons
  breedButtons.forEach((button) => {
    const breedName = button.innerHTML.toLowerCase(); // Convert breed name to lowercase for comparison

    // Check if the breed name starts with the selected value or if "all" is selected
    if (breedName.startsWith(selectedValue)) {
      button.style.display = "block";
    } else {
      button.style.display = "none"; 
    }
  });
}

//need thing to run functions on page load
document.addEventListener("DOMContentLoaded", myInit, true); function myInit(){fetchDog(); fetchBreed(); 
  //it was stopping the page from loading so I had to put it here.  
  const breedDropdown = document.getElementById("breedDropdown");
  breedDropdown.addEventListener("change", handleDropdownChange);

}; 
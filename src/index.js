const URL = " http://localhost:3000/businesses"

document.addEventListener("DOMContentLoaded", initPage)

function initPage(){
  getTrucks()
}

function getTrucks() {
  fetch(URL)
  .then(res => res.json())
  .then(myJson => myJson.forEach(addTruckToPage))
}

function addTruckToPage(truck){
  const container = document.querySelector(".truck-container")
  const truckDiv = document.createElement("div")
  truckDiv.className = "truck"
  renderTruck(truck, truckDiv)

  const truckBtn = document.createElement("button")
    truckBtn.className = "speed"
  truckBtn.innerHTML = "This truck is fast!"
  truckBtn.addEventListener('click', speedVote)

  truckDiv.appendChild(truckBtn)
  container.appendChild(truckDiv)
}

function renderTruck(truck, truckDiv) {
  truckDiv.innerHTML +=
  `<h2>${truck.name}</h2>
  <p>Speed: ${truck.review_count}</p>
  <p>${truck.location.display_address}</p>
  `
    // <img src="${truck.image_url}" class="truck-image" />
}

function speedVote(event) {
  console.log('hi there')
}

// id
// alias
// name
// image_url

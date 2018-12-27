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

  const voteBtn = document.createElement("button")
  voteBtn.className = "vote"
  voteBtn.innerHTML = "This truck is fast!"
  voteBtn.addEventListener('click', speedVote)

  truckDiv.appendChild(voteBtn)
  container.appendChild(truckDiv)
}

function renderTruck(truck, truckDiv) {
  truckDiv.innerHTML +=
  `<h2 class="truck-name">${truck.name}</h2>
  <p class="review-count">Votes: ${truck.review_count}</p>
  <p class="truck-location">${truck.location.display_address}</p>
  `
    // <img src="${truck.image_url}" class="truck-image" />
}

function speedVote(event) {
  renderVote(event)
}

function renderVote(event) {
  const votes = event.target.previousElementSibling.previousElementSibling.innerHTML
  let plusVote = parseInt(votes.split(" ")[1]) + 1
  event.target.previousElementSibling.previousElementSibling.innerHTML = `Votes ${plusVote}`
  patchTruck(event, plusVote)
}

function patchTruck(event, plusVote) {
  console.log(event, plusVote)
}


// id
// alias
// name
// image_url

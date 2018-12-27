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

  createTruckDataset(truck, truckDiv)
  renderTruck(truck, truckDiv)

  const voteBtn = document.createElement("button")
  voteBtn.className = "vote"
  voteBtn.innerHTML = "This truck is fast!"
  voteBtn.addEventListener('click', renderVote)

  truckDiv.appendChild(voteBtn)
  container.appendChild(truckDiv)
}

function renderTruck(truck, truckDiv) {
  truckDiv.innerHTML +=
  `<h2>${truck.name}</h2>
  <p>Votes: ${truck.review_count}</p>
  <p>${truck.location.display_address}</p>
  `
    // <img src="${truck.image_url}" class="truck-image" />
}

function createTruckDataset(truck, truckDiv){
  truckDiv.dataset.id = truck.id
  truckDiv.dataset.name = truck.name
  truckDiv.dataset.image = truck.image_url
  truckDiv.dataset.location = truck.location.display_address
  truckDiv.dataset.reviews = truck.review_count
}

function renderVote(event) {
  const votes = event.target.previousElementSibling.previousElementSibling.innerHTML
  let plusVote = parseInt(votes.split(" ")[1]) + 1
  event.target.previousElementSibling.previousElementSibling.innerHTML = `Votes ${plusVote}`
  patchTruck(event, plusVote)
}

function patchTruck(event, plusVote) {
  const truck = event.target.parentNode.dataset

  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "name": truck.name,
      "image": truck.image,
      "location": truck.location,
      "review_count": plusVote
    })
  }
}

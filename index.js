let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let newHomeScore = 0
let newGuestScore = 0

function addOnePointHome() {
    newHomeScore++
    homeScore.textContent = newHomeScore
}

function addTwoPointsHome() {
    newHomeScore += 2
    homeScore.textContent = newHomeScore
}

function addThreePointsHome() {
    newHomeScore += 3
    homeScore.textContent = newHomeScore
}

function addOnePointGuest() {
    newGuestScore++
    guestScore.textContent = newGuestScore
}

function addTwoPointsGuest() {
    newGuestScore += 2
    guestScore.textContent = newGuestScore
}

function addThreePointsGuest() {
    newGuestScore += 3
    guestScore.textContent = newGuestScore
}

function reset() {
    homeScore.textContent = 0
    guestScore.textContent = 0
}
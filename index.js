let homeScore = document.getElementById("home-score")
let awayScore = document.getElementById("away-score")

let homeCount = 0
let awayCount = 0
function add1Home () {
    homeCount += 1
    homeScore.textContent =  homeCount
}

function add2Home () {
    homeCount += 2
    homeScore.textContent =  homeCount
}

function add3Home () {
    homeCount += 3
    homeScore.textContent =  homeCount
}

function add1Away () {
    awayCount += 1
    awayScore.textContent = awayCount
}

function add2Away () {
    awayCount += 2
    awayScore.textContent = awayCount
}

function add3Away () {
    awayCount += 3
    awayScore.textContent = awayCount
}



function reset () {
    homeCount = 0
    awayCount = 0
    homeScore.textContent = homeCount
    awayScore.textContent = awayCount
}

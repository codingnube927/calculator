let guestScore = 0
let homeScore = 0
let home = document.getElementById("homeScore")
let guest = document.getElementById("guestScore")


function addhomeOne(){
    let score1 = homeScore += 1
    home.innerText = score1
    
}

function addhomeTwo(){
    let score2 = homeScore += 2
    home.innerText = score2
    
}



function addhomeThree(){
    let score3 = homeScore += 3
    home.innerText = score3
    
}

function addguestOne(){
    let score1 = guestScore += 1
    guest.innerText = score1
    
}

function addguestTwo(){
   let score2 = guestScore += 2
    guest.innerText = score2
    
    
}



function addguestThree(){
   let score3 = guestScore += 3 
    guest.innerText = score3
    
    
}


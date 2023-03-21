let cells = document.querySelectorAll('.cell')
cells = Array.from(cells)

let currentPlayer = "X"

//each sequence represents a winning combination
let winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

//function to check if the player managed to make the winning combination
function checkforWinner(){
    winningCombinations.forEach(function(combination){
        let check = combination.every(idx => cells[idx].innerText.trim() == currentPlayer)
        if(check){
            highlightCells(combination)
           
        }
      
    })  
   
}

//function to signal when the player makes the winning combination
function highlightCells(combination){
    combination.forEach(function(idx){
        cells[idx].classList.add("highlight")  
    })
 
}
//function to define the priority of each player to play
cells.forEach(function(cell){
    cell.addEventListener('click', function(){
        if(cell.innerText.trim() != "") return
        cell.innerHTML = currentPlayer
        checkforWinner()
        currentPlayer = currentPlayer == "X" ? "O" : "X"
    })
})
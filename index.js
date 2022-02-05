let cellsArray = Array(9).fill('');

//initialise game variables

let roundCount = 0;
let computerTurn = false;

play();

function play() {

    (computerTurn == false) ? playerRound() : computerRound();
    
}

function playerRound() {
   
    document.addEventListener('click', (event) => {
        
        console.log('playing player round');
        console.log(event);
        if (event.target.className == 'grid-cell') {
            event.target.textContent = 'X';
            storeInArray(event.target.id, 'X');
            checkForWin();
            roundCount++;
            event.stopPropagation();
            event.preventDefault();
        }
    })
}

function computerRound() {

    console.log('playing computer round');
    
    let availableCells = getAvailableCells(cellsArray);

    let computerSelection = getRandomNumber(availableCells);        // get an available cell chosen at random

    let chosenGridCell = document.getElementById((computerSelection).toString())
    chosenGridCell.textContent = 'O';
    storeInArray(computerSelection, 'O');
   
    checkForWin();
    roundCount++;
}

function getAvailableCells(cells) {

    let availableCells = [];

    cells.forEach((cell, index) => {
        if (cell == '') {
            availableCells.push({position : index});
        }
    })

    return availableCells;
}

function getRandomNumber(emptyCells) {
    let randomNum = Math.floor(Math.random() * emptyCells.length);
    return emptyCells[randomNum].position;
}


function storeInArray(position, symbol) {
    cellsArray[position] = symbol;
}

function checkForWin() {
    if (roundCount > 4) {
        if ((cellsArray[0] == cellsArray[1] && cellsArray[0] == cellsArray[2] && cellsArray[0] !=='') ||
            (cellsArray[3] == cellsArray[4] && cellsArray[3] == cellsArray[5] && cellsArray[3] !=='') ||
            (cellsArray[6] == cellsArray[7] && cellsArray[6] == cellsArray[8] && cellsArray[6] !=='') ||
            (cellsArray[0] == cellsArray[4] && cellsArray[0] == cellsArray[8] && cellsArray[0] !=='') ||
            (cellsArray[2] == cellsArray[4] && cellsArray[2] == cellsArray[6] && cellsArray[2] !=='') 
        ) {
            console.log('WIN!');
        }
        else {
            switchTurn();
            play();
        }
    }
    else {
        switchTurn();
        play();
    }
}

function switchTurn() {
    computerTurn = !computerTurn;
}




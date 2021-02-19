
// GLOBALS
grid = []

// on page load
function loadBoard(){
    txt = ""
    for (i = 0; i < 9; i++){
        txt += "<div class='row'>"
        for (p = 0; p < 9; p++){
            // the id is just the x and y coords slapped together, messy but it works for the application
            txt += "<input type='text' oninput='validateInput(this)' class='square' id='"+String(i)+String(p)+"' maxlength='1'>"
        }
        txt += "</div>"
    }
    board = document.getElementById("board")
    board.innerHTML = txt
}

function validateInput(element){
    num = element.value
    if (num == ""){
        num = 0
    }
    // casts value to integer, and then tests if it is valid
    num = parseInt(num)
    if (Number.isInteger(num)){
        // pass
    }
    else{
        element.value = ""
        notANumber()
        return("-1")
    }
    getBoard()
    userInputed(element)
}

function removeComputerNumbers(){
    for (i = 0; i < 9; i++){
        for (p = 0; p < 9; p++){
            element = document.getElementById(String(i)+String(p))
            if (element.classList.contains("computer-input")){
                element.value = ""
                element.classList.remove("computer-input")
            }
        }
    }
}

function userInputed(element){
    element.classList.add("user-input")
    element.classList.remove("computer-input");
}

function displayBoard(board){
    for (i = 0; i < 9; i++){
        for (p = 0; p < 9; p++){
            num = board[i][p]
            if (num == 0){
                num = ""
            }
            document.getElementById(String(i)+String(p)).value = num
        }
    }
}

function formatAfterSolve(){
    for (i = 0; i < 9; i++){
        for (p = 0; p < 9; p++){
            element = document.getElementById(String(i)+String(p))
            if (element.classList.contains("user-input")){
                // pass
            }
            else{
                element.classList.add("computer-input")
            }
        }
    }
}

function getBoard(){
    grid = []
    // row by row for flexibility ig
    for (i = 0; i < 9; i++){
        grid.push([])
        for (p = 0; p < 9; p++){
            element = document.getElementById(String(i)+String(p))
            grid[i].push(element.value)
        }
    }
}

function notANumber(){
    alert("You entered an invalid value, please try again.")
}

function initBoard(){
    grid = [
        [0, 0, 5, 0, 7, 8, 0, 0, 9],
        [0, 8, 0, 0, 0, 0, 0, 0, 0],
        [2, 7, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 2, 4, 3],
        [1, 9, 0, 7, 0, 0, 0, 0, 5],
        [0, 0, 0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 8, 0, 5, 0, 0, 7],
        [3, 0, 0, 0, 0, 0, 9, 0, 0],
    ]
    displayBoard(grid)
    formatNums()
}

// all numbers in grid are now considered user inputted
function formatNums(){
    for (i = 0; i < 9; i++){
        for (p = 0; p < 9; p++){
            element = document.getElementById(String(i)+String(p))
            if (element.value != ""){
                element.classList.add("user-input")
                element.classList.remove("computer-input")
            }
            else{
                element.classList.remove("user-input")
                element.classList.remove("computer-input")
            }
        }
    }
}

function clearBoard(){
    grid = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]
    displayBoard(grid)
    formatNums()
}
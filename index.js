
// GLOBALS
grid = []

// on page load
function loadBoard(){
    txt = ""
    for (i = 0; i < 9; i++){
        txt += "<div class='row'>"
        for (p = 0; p < 9; p++){
            // the id is just the x and y coords slapped together, messy but it works for the application
            txt += "<input type='text' onchange='getBoard(); formatNums()' class='square' id='"+String(i)+String(p)+"' maxlength='1'>"
        }
        txt += "</div>"
    }
    board = document.getElementById("board")
    board.innerHTML = txt
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

function getBoard(){
    grid = []
    // row by row for flexibility ig
    for (i = 0; i < 9; i++){
        grid.push([])
        for (p = 0; p < 9; p++){
            element = document.getElementById(String(i)+String(p))
            num = element.value
            if (num == ""){
                num = 0
            }
            // casts value to integer, and then tests if it is valid
            num = parseInt(num)
            if (Number.isInteger(num)){
                grid[i].push(num)
            }
            else{
                notANumber()
                return("-1")
            }
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
    solved = false
    displayBoard(grid)
    formatNums()
}

function clearBoard(){
    solved = false
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
    resetColors()
}

function resetColors(){
    for (i = 0; i < 9; i++){
        for (p = 0; p < 9; p++){
            element = document.getElementById(String(i)+String(p))
            element.style.backgroundColor = "white"
        }
    }
}

function formatNums(){
    for (i = 0; i < 9; i++){
        for (p = 0; p < 9; p++){
            element = document.getElementById(String(i)+String(p))
            if (element.value != ""){
                element.style.color = "black"
                element.style.fontWeight = "bold"
            }
            else{
                element.style.color = "grey"
                element.style.fontWeight = "normal"
            }
        }
    }
}
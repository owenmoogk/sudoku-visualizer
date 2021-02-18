function loadBoard(){
    txt = ""
    for (i = 0; i < 9; i++){
        txt += "<div class='row'>"
        for (p = 0; p < 9; p++){
            // the id is just the x and y coords slapped together, messy but it works for the application
            txt += "<input type='text' onkeypress='myFunction()' class='square' id='"+String(i)+String(p)+"' maxlength='1'>"
        }
        txt += "</div>"
    }
    board = document.getElementById("board")
    board.innerHTML = txt
}

function displayBoard(board){
    console.log("BOIIIII")
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
    array = []
    // row by row for flexibility ig
    for (i = 0; i < 9; i++){
        array.push([])
        for (p = 0; p < 9; p++){
            element = document.getElementById(String(i)+String(p))
            num = element.value
            if (num == ""){
                num = 0
            }
            // casts value to integer, and then tests if it is valid
            num = parseInt(num)
            if (Number.isInteger(num)){
                array[i].push(num)
            }
            else{
                notANumber()
                return("-1")
            }
        }
    }
    grid = array
}

function notANumber(){
    alert("You entered an invalid value, please try again.")
}
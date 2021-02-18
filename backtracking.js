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
}

function solveSudoku(){
    console.log("started")
    console.log(grid, solved)
    solveSudokuHelper(0,0)
}

function solveSudokuHelper(x,y){
    if (solved){
        return
    }
    // this happens when the grid is solved
    if (y>8){
        console.log("init finishing process")
        displayBoard(grid)
        solved = true
    }

    // this happens when the grid is at the final row, and needs to go down a row
    else if (x>8){
        solveSudokuHelper(0,y+1)
    }
    else if (grid[y][x] == 0){
        for (let i = 1; i < 10; i++){
            if (isValid(x, y, i)){
                grid[y][x] = i
                solveSudokuHelper(x+1, y)
                grid[y][x] = 0
            }
        }
    }
    else{
        solveSudokuHelper(x+1, y)
    }
}

function isValid(x, y, num){

    // row checking
    for (let col = 0; col < 9; col++){
        if (num == grid[y][col]){
            return(false)
        }
    }
    
    // column checking
    for (let row = 0; row < 9; row++){
        if (num == grid[row][x]){
            return(false)
        }
    }

    // square checking
    startRow = y - (y % 3)
    startCol = x - (x % 3)

    row = startRow
    while (row <= startRow + 2){
        col = startCol
        while (col <= startCol + 2){
            if (grid[row][col] == num){
                return(false)
            }
            col += 1
        }
        row += 1
    }
    return(true)
}
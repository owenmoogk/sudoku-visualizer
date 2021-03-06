animations = []
solved = false

function backtracking(){
    removeComputerNumbers()
    solved = false
    getBoard()
    animations = []
    formatNums()
    backtrackingHelper(0,0)
    doAnimations()
}

// solve without animations
function solve(){
    removeComputerNumbers()
    solved = false
    backtrackingHelper(0,0)
    displayBoard(grid)
    formatAfterSolve()
}

function backtrackingHelper(x,y){
    if (solved){
        return
    }
    // this happens when the grid is solved
    if (y>8){
        solved = true
    }

    // this happens when the grid is at the final row, and needs to go down a row
    else if (x>8){
        backtrackingHelper(0,y+1)
    }

    else if (grid[y][x] == 0){
        for (let i = 1; i < 10; i++){
            if (isValid(x, y, i)){
                grid[y][x] = i
                animations.push([x, y, i])
                backtrackingHelper(x+1, y)
                if (solved){
                    return
                }
                grid[y][x] = 0
                animations.push([x, y, 0])
            }
        }
    }
    else{
        backtrackingHelper(x+1, y)
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
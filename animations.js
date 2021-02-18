animationSpeed = 1

function doAnimations(){
    console.log("animating")

    // precalculation
    animationLength = animations.length
    movesLeft = document.getElementById("moves-left")
    for(let i = 0; i < animationLength; i++){
        animationHelper(movesLeft, i, animationLength)
    }
}

function animationHelper(movesLeft, i, animationLength){
    setTimeout(() => {
        x = animations[0][0]
        y = animations[0][1]
        num = animations[0][2]
        element = document.getElementById(String(y)+String(x))
        console.log(animations)
        animations.shift()
        if (num == 0){
            element.style.backgroundColor = "white"
            element.value = ""
        }
        else{
            element.style.backgroundColor = "rgba(0,255,0,0.5)"
            element.value = num
        }
        movesLeft.innerText = animationLength - i
    }, animationSpeed);
}
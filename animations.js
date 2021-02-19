animationSpeed = 0.1

function doAnimations(){
    console.log("animating")
    // precalculation
    animationLength = animations.length
    movesLeftElement = document.getElementById("moves-left")
    for(let i = 0; i < animationLength; i++){
        animationHelper(movesLeftElement, i, animationLength)
    }
}

function animationHelper(movesLeftElement, i, animationLength){
    setTimeout(() => {
        x = animations[0][0]
        y = animations[0][1]
        num = animations[0][2]
        element = document.getElementById(String(y)+String(x))
        animations.shift()
        if (num == 0){
            element.classList.remove("computer-input")
            element.value = ""
        }
        else{
            element.classList.add("computer-input")
            element.value = num
        }
        movesLeftElement.innerText = animationLength - i
        if (animationLength - i <= 2){
            movesLeftElement.innerText = ""
        }
    }, animationSpeed);
}
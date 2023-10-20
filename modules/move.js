module.exports = {
    move: (input, newPlay) => {
        if(input === '\u001b[A') {
            if (newPlay.lastMoveIndex <= newPlay.width){
                process.stdout.write("You cannot go from the game board!")
            }
            else if (newPlay.visualFieldArray[newPlay.lastMoveIndex - (1 + newPlay.width)] === "0") {
                process.stdout.write("Game Over! You fall through the hole!")
            }
            else if (newPlay.visualFieldArray[newPlay.lastMoveIndex - (1 + newPlay.width)] === "^") {
                newPlay.print()
                process.stdout.write("Congratulations! You found your hat\n")
                process.exit()
            }
            else if (newPlay.visualFieldArray[newPlay.lastMoveIndex - (1 + newPlay.width)] === "*") {
                process.stdout.write("You was already here!\n")
            }
            else {
                newPlay.visualFieldArray[newPlay.lastMoveIndex - (1 + newPlay.width)] = "*"
                newPlay.lastMoveIndex = newPlay.lastMoveIndex - (1 + newPlay.width)
            }
        }
        if(input === '\u001b[B') {
            if (newPlay.lastMoveIndex >= newPlay.visualFieldArray.length - newPlay.width){
                process.stdout.write("You cannot go from the game board!\n")
            }
            else if (newPlay.visualFieldArray[newPlay.lastMoveIndex + (1 + newPlay.width)] === "0") {
                process.stdout.write("Game Over! You fall through the hole!")
                process.exit();
            }
            else if (newPlay.visualFieldArray[newPlay.lastMoveIndex + (1 + newPlay.width)] === "*") {
                process.stdout.write("You was already here!\n")
            }
            else if (newPlay.visualFieldArray[newPlay.lastMoveIndex + (1 + newPlay.width)] === "^") {
                newPlay.print()
                process.stdout.write("Congratulations! You found your hat\n")
                process.exit()
            }
            else {
                newPlay.visualFieldArray[newPlay.lastMoveIndex + (1 + newPlay.width)] = "*"
                let newLastMoveIndex = newPlay.lastMoveIndex + (1 + newPlay.width)
                newPlay.lastMoveIndex= newLastMoveIndex
            }
        }
        if(input === '\u001b[C') {
            if (newPlay.lastMoveIndex === newPlay.visualFieldArray.length || newPlay.visualFieldArray[newPlay.lastMoveIndex + 1] === "\n"){
                process.stdout.write("Game Over! You fall of the Clip!")
                process.exit();
            }
            else if (newPlay.visualFieldArray[newPlay.lastMoveIndex + 1] === "0") {
                process.stdout.write("Game Over! You fall through the hole!")
                process.exit();
            }
            else if (newPlay.visualFieldArray[newPlay.lastMoveIndex + 1] === "*") {
                process.stdout.write("You already was here!\n")
            }
            else if (newPlay.visualFieldArray[newPlay.lastMoveIndex + 1] === "^") {
                newPlay.print()
                process.stdout.write("Congratulations! You found your hat\n")
                process.exit();
            }
            else {
                newPlay.visualFieldArray[newPlay.lastMoveIndex + 1] = "*"
                newPlay.lastMoveIndex++
            }
        }
        if(input === '\u001b[D') {
            if (newPlay.lastMoveIndex === 0 || newPlay.visualFieldArray[newPlay.lastMoveIndex - 1] === "\n"){
                process.stdout.write("Game Over! You fall of the Clip!")
                process.exit();
            }
            else if (newPlay.visualFieldArray[newPlay.lastMoveIndex - 1] === "0") {
                process.stdout.write("Game Over! You fall through the hole!")
                process.exit();
            }
            else if (newPlay.visualFieldArray[newPlay.lastMoveIndex - 1] === "*") {
                process.stdout.write("You already was here!\n")
            }
            else if (newPlay.visualFieldArray[newPlay.lastMoveIndex - 1] === "^") {
                newPlay.print()
                process.stdout.write("Congratulations! You found your hat\n")
                process.exit();
            }
            else {
                newPlay.visualFieldArray[newPlay.lastMoveIndex - 1] = "*"
                newPlay.lastMoveIndex--
            }
        }
    }
}
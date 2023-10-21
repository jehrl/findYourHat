let { move } = require("./modules/move.js");
let { chooseHeight,chooseHoles,chooseWidth } = require("./modules/choosingField.js");

const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(width = 0,height = 0,holes = 0) {
    this._width = width
    this._height = height
    this._holes = holes
    this._visualFieldArray = []
    this._lastMoveIndex = 0
  };
  get width() {
    return this._width
  };
  get height(){
    return this._height
  };
  get holes(){
    return this._holes
  };
  get visualFieldArray(){
    return this._visualFieldArray
  };
  get lastMoveIndex(){
    return this._lastMoveIndex
  }
  set lastMoveIndex(newValue){
    this._lastMoveIndex = newValue
  }
  set width(newValue){
    this._width = newValue
  }
  set height(newValue){
    this._height = newValue
  }
  set holes(newValue){
    this._holes = newValue
  }
  generateField() {
    const arrLength = this.height * this._width;
    let holesCount = this._holes;
    let holesIndexes = [];
    let hatIndex = 0
    const generateNumber = () => {
      return Math.floor(Math.random() * (arrLength - 0)) + 0
    }
    const generateArray = () => {
      
        while (holesCount > 0) {
            let generatedNumber = generateNumber()
            if(!holesIndexes.includes(generatedNumber || generatedNumber === 0)){
              holesIndexes.push(generatedNumber);
              holesCount--;
            }
        }
        let tempGenerateHatIndex = generateNumber()
        console.log(tempGenerateHatIndex)
        while (holesIndexes.includes(tempGenerateHatIndex || tempGenerateHatIndex === 0)) {
          hatIndex = generateNumber()
        }
        hatIndex = tempGenerateHatIndex
    
  }
    generateArray()
    for(let i = 0; i < (arrLength+this._height);i++) {
      if (i === 0) {
        this._visualFieldArray.push(pathCharacter)
      }
        else if ((i+1)%(this._width+1) === 0 && i!== 0) {
        this._visualFieldArray.push("\n")
      } else if(holesIndexes.includes(i)){
        this._visualFieldArray.push(hole)
      } else if(hatIndex === i){
        this._visualFieldArray.push(hat)
      } else {this._visualFieldArray.push(fieldCharacter)
    }
    }
  }
  print() {
    console.log(this._visualFieldArray.join(""))
  };
}
let newPlay = new Field()

newPlay.width = parseInt(prompt('Choose the width: '));
newPlay.height = parseInt(prompt('Choose the height: '));
newPlay.holes = parseInt(prompt('Choose the number of holes: '));


newPlay.generateField()
console.log(newPlay.visualFieldArray)
newPlay.print()

process.stdout.write("Where you want to move?")

let playGame = (userInput) => {
  let input = userInput.toString().trim();
  move(input, newPlay)
  newPlay.print()
}

process.stdin.on('data', playGame)

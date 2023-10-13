const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(width,height,holes) {
    this._width = width
    this._height = height
    this._holes = holes
    this._fieldArray = []
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
  generateField() {
    const arrLength = this.height * this._width;
    let holesIndexes = [];
    let holesCount = this._holes;
    const generateArray = () => {
        while (holesCount > 0) {
            generatedNumber = Math.floor(Math.random() * (arrLength - 0)) + 0;
            while(!holesIndexes.includes(generatedNumber)){
                holesIndexes.push(generatedNumber)
            }
        }
    }
    for(let i = 0; i > this._height;i++) {

    }
  }
};


const array = [░,░,░,░,░,0,0,░,0];
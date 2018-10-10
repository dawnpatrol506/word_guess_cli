var Letter = require('./letter');
const debug = false;

module.exports = class Word{
    constructor(word){
        if(debug) console.log('CONSTRUCTING WORD');
        this.letters = [];

        for(let i = 0; i < word.length; i++){
            let newletter = new Letter(word[i], false);
            this.letters.push(newletter);
        }
    }

    display(){
        let displayWord = '';
        this.letters.forEach(letter =>{
            displayWord += (letter.display() + ' ');
        });
        console.log(displayWord);
    }

    checkGuess(guess){
        let right = false;
        this.letters.forEach(letter => {
           if(letter.checkGuess(guess))
                right = true;
        });
        if(debug)
            console.log('WORD: RIGHT: ' + right);
        return right;
    }
    
}
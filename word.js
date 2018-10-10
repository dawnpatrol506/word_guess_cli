var Letter = require('./letter');
const debug = true;

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
        let displayWord;
        this.letters.forEach(letter =>{
            displayWord += letter.display();
        });
        console.log(displayWord);
    }

    checkGuess(guess){
        this.letters.forEach(letter => {
            letter.checkGuess(guess);
        });
    }
    
}
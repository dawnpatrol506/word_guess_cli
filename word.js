var Letter = require('./letter');

module.exports = class Word{
    constructor(word){
        this.letters = [];

        this.letters.forEach(letter => {
            let newletter = new Letter(letter, false);
            letters.push(newletter);
        })
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
var Word = require('./word');
var Readline = require('readline-sync');

class Game{
    constructor(word){
        this.word = new Word(word);
        this.guesses = 10;
        this.isWon = false;
    };

    checkWin(){
        this.isWon = true;
        word.letters.forEach(letter =>{
            if(!letter.isGuessed)
            this.isWon = false;
        })
    };

    display(){
        this.word.display();
    };

    checkGuess(){
        this.word.checkGuess();
    }

    play(){
        this.display()
        let guess = Readline.question('guess: ');
        this.checkGuess(guess);
        this.checkWin();
    }
}

let word = new Word('hello');

let game = new Game(word);

while(!game.isWon){
    game.play();
}
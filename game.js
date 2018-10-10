var Word = require('./word');
var Readline = require('readline-sync');

class Game {
    constructor(word) {
        this.word = word;
        this.guesses = 10;
        this.isWon = false;
    };

    checkWin() {
        this.isWon = true;
        this.word.letters.forEach(letter => {
            if (!letter.isGuessed)
                this.isWon = false;
        })

        if (this.isWon) {
            console.log('WINNER!!!');
        }
    };

    display() {
        this.word.display();
        console.log('Remaining guesses: ' + this.guesses);
    };

    checkGuess(letter) {
        if(letter.length !== 1){
            console.log('Invalid input. Please type one letter.');
            return true;
        }
        return this.word.checkGuess(letter);
    }

    play() {
        this.display()
        let guess = Readline.question('guess: ');
        if (this.checkGuess(guess))
            this.checkWin();
        else {
            this.guesses--;
            if(this.guesses < 1){
                console.log('LOSER!!!');
                this.isWon = true;
            }
        }
    }

    start() {
        while (!this.isWon) {
            this.play();
        }
    }

}

let answer = 'y';

while (answer.toLowerCase() !== 'n') {
    let word = new Word('hello');
    let game = new Game(word);
    game.start();
    answer = Readline.question('Would you like to play again? (Y/n)');
}


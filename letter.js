module.exports = class Letter{
    constructor(letter, isGuessed){
        this.letter = letter;
        this.isGuessed = isGuessed;
    }

    display(){
        if(this.isGuessed)
            return this.letter;
        else
            return '_';
    }

    checkGuess(letter){
        if(letter === this.letter){
            this.isGuessed = true;
            return true;
        }
        else
            return false;
    }
}